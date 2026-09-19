import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9t1v_b2q.css';
import '../../css/i/i0l9-k3qh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q9t1v_b2q"/><path class="i0l9-k3qh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:first-quarter-moon-face",
	});
}

export default Component;
