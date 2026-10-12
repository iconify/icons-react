import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b489q0b4y.css';
import '../../css/d/d2x_502uq.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/r/rl_jl967n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b489q0b4y"/><path class="d2x_502uq"/><path class="w5p5w4_bh"/><path class="rl_jl967n"/></g>`,
		"fallback": "andrsrxn:face-plus",
	});
}

export default Component;
