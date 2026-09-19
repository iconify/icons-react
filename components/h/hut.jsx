import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ha0-b_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ha0-b_k"/>`,
		"fallback": "fluent-emoji-high-contrast:hut",
	});
}

export default Component;
