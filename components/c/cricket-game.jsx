import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk248-f8v.css';
import '../../css/y/y01i0lbmb.css';
import '../../css/m/m-z9dpb_z.css';
import '../../css/j/j2cu_wbbx.css';
import '../../css/f/f0ertdbbm.css';
import '../../css/n/nmd_jobqi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/mc4w7836i.css';
import '../../css/u/u_xiy_1hb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk248-f8v"/><path class="y01i0lbmb"/><path class="m-z9dpb_z"/><path class="j2cu_wbbx"/><circle class="f0ertdbbm"/><path class="nmd_jobqi"/><g class="ij2x_72vy"><path class="mc4w7836i"/><circle class="u_xiy_1hb"/></g>`,
		"fallback": "openmoji:cricket-game",
	});
}

export default Component;
