import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lc2i193pv.css';
import '../../css/p/p_z3d3ben.css';
import '../../css/c/cre15cbsi.css';
import '../../css/h/hafim0tfh.css';
import '../../css/u/usn354yzk.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="lc2i193pv wm-shadow"/><path class="p_z3d3ben"/><path class="cre15cbsi"/><path class="hafim0tfh"/><path class="usn354yzk wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`,
		"fallback": "withicons-sticker:clipboard-check",
	});
}

export default Component;
