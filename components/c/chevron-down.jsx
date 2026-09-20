import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ay_wb3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ay_wb3k"/>`,
		"fallback": "la:chevron-down",
	});
}

export default Component;
