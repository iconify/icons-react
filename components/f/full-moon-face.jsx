import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix7hglclh.css';
import '../../css/b/bexrw9p6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ix7hglclh"/><path class="bexrw9p6j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:full-moon-face",
	});
}

export default Component;
