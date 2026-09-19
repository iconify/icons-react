import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx9j_3bvo.css';
import '../../css/a/ap8i-wbbp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx9j_3bvo"/><path class="ap8i-wbbp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:brain",
	});
}

export default Component;
