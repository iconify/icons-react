import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ergafni5q.css';
import '../../css/x/xf3313bml.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ergafni5q"/><path class="xf3313bml"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bison",
	});
}

export default Component;
