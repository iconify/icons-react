import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfma9rbbs.css';
import '../../css/s/se591kblr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jfma9rbbs"/><path class="se591kblr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:empty-nest",
	});
}

export default Component;
