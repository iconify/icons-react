import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9pp1fbcz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9pp1fbcz"/>`,
		"fallback": "pullo:bookmark-simple-slash-bold",
	});
}

export default Component;
