import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx4qkwd-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx4qkwd-i"/>`,
		"fallback": "ooui:draggable-vertical",
	});
}

export default Component;
