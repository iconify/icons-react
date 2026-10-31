import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k4nruc-co.css';
import '../../css/j/j4jgqm3yv.css';
import '../../css/u/u_i6qlrvq.css';
import '../../css/w/w_2mv-adh.css';
import '../../css/c/ctht6_bhr.css';
import '../../css/m/mzsdnocnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k4nruc-co wm-shadow"/><path class="j4jgqm3yv"/><path class="u_i6qlrvq"/><path class="w_2mv-adh"/><path class="ctht6_bhr"/><path class="mzsdnocnw"/></g>`,
		"fallback": "withicons-retro:avatar-owl",
	});
}

export default Component;
