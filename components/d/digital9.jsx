import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9pd17xhz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9pd17xhz"/>`,
		"fallback": "fad:digital9",
	});
}

export default Component;
