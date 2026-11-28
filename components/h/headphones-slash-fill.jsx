import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cttyy7b9v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cttyy7b9v"/>`,
		"fallback": "pullo:headphones-slash-fill",
	});
}

export default Component;
