import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e04hhlbss.css';
import '../../css/d/dqfo01btt.css';
import '../../css/q/q_oe4kopd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e04hhlbss"/><path class="dqfo01btt"/><path class="q_oe4kopd"/></g>`,
		"fallback": "iconaut:circles-check",
	});
}

export default Component;
