import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdxbqq0sz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdxbqq0sz"/>`,
		"fallback": "pullo:bookmark-simple-plus",
	});
}

export default Component;
