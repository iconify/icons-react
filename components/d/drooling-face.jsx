import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xayji6lde.css';
import '../../css/q/q0_85yeir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xayji6lde"/><path class="q0_85yeir"/></g>`,
		"fallback": "fluent-emoji-high-contrast:drooling-face",
	});
}

export default Component;
