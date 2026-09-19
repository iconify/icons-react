import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz262cp_y.css';
import '../../css/j/ju19h-0se.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uz262cp_y"/><path class="ju19h-0se"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fried-shrimp",
	});
}

export default Component;
