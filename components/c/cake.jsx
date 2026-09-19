import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llfhb1b4r.css';

const viewBox = {"width":384,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llfhb1b4r"/>`,
		"fallback": "zmdi:cake",
	});
}

export default Component;
