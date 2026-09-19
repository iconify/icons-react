import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v12-rwbez.css';

const viewBox = {"width":160,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v12-rwbez"/>`,
		"fallback": "zmdi:chevron-left",
	});
}

export default Component;
