import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rm-idea5h.css';
import '../../css/q/qu307c6jr.css';
import '../../css/p/p21j3ibnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rm-idea5h"/><path class="qu307c6jr"/><path class="p21j3ibnc"/></g>`,
		"fallback": "iconaut:arrow-right-through-line",
	});
}

export default Component;
