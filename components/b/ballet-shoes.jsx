import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7-ezobvr.css';
import '../../css/n/no7s-w-vw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7-ezobvr"/><path class="no7s-w-vw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ballet-shoes",
	});
}

export default Component;
