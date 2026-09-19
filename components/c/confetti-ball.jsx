import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo973hbxy.css';
import '../../css/x/xhv67q_ub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eo973hbxy"/><path class="xhv67q_ub"/></g>`,
		"fallback": "fluent-emoji-high-contrast:confetti-ball",
	});
}

export default Component;
