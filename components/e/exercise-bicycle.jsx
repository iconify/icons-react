import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nv-1ekfqr.css';
import '../../css/g/g6z8sdwdd.css';
import '../../css/i/iw7m08_us.css';
import '../../css/p/p5gy2-h3c.css';
import '../../css/n/ng_2zjk7g.css';
import '../../css/r/rk6eizb_u.css';
import '../../css/c/cmg54dw8h.css';
import '../../css/o/om1y99_ii.css';
import '../../css/f/f_d-3kboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nv-1ekfqr"/><path clip-rule="evenodd" class="g6z8sdwdd"/><path clip-rule="evenodd" class="iw7m08_us"/><path class="p5gy2-h3c"/><path clip-rule="evenodd" class="ng_2zjk7g"/><path clip-rule="evenodd" class="rk6eizb_u"/><path clip-rule="evenodd" class="cmg54dw8h"/><path class="om1y99_ii"/><path clip-rule="evenodd" class="f_d-3kboe"/></g>`,
		"fallback": "healthicons:exercise-bicycle",
	});
}

export default Component;
