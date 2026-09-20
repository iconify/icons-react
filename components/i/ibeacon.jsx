import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_cajlkmg.css';
import '../../css/p/pedaiu3fb.css';
import '../../css/s/sjhsm0b3g.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x3uf_n0_l.css';
import '../../css/q/qrpoumb4a.css';
import '../../css/l/la51xjbhm.css';
import '../../css/k/khifc5bhc.css';
import '../../css/i/imab1nb6z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t_cajlkmg"/><path class="pedaiu3fb"/><path class="sjhsm0b3g"/><g class="ij2x_72vy"><circle class="x3uf_n0_l"/><path class="qrpoumb4a"/><path class="la51xjbhm"/><path class="khifc5bhc"/><path class="imab1nb6z"/></g>`,
		"fallback": "openmoji:ibeacon",
	});
}

export default Component;
