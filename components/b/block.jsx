import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn5c3hbsg.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn5c3hbsg"/>`,
		"fallback": "zmdi:block",
	});
}

export default Component;
