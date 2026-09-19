import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t5kvsfbun.css';
import '../../css/y/ypp-e2b-z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t5kvsfbun"/><path class="ypp-e2b-z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fire-extinguisher",
	});
}

export default Component;
