import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/by19jotez.css';
import '../../css/a/a_k4ynbxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="by19jotez"/><path class="a_k4ynbxp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:green-salad",
	});
}

export default Component;
