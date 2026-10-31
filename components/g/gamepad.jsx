import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wi09hzbth.css';
import '../../css/r/rllubrqjy.css';
import '../../css/d/duidhfjsx.css';
import '../../css/c/cut0jwb7r.css';
import '../../css/e/ek8mf1b5b.css';
import '../../css/g/g0fr8ub-a.css';
import '../../css/c/cc679gb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wi09hzbth wm-k"/><path class="rllubrqjy wm-deco"/><path class="duidhfjsx wm-k"/><path class="cut0jwb7r wm-k"/><path class="ek8mf1b5b wm-shadow"/><path class="g0fr8ub-a wm-shine"/><path class="cc679gb_o wm-shine"/></g>`,
		"fallback": "withicons-valentine:gamepad",
	});
}

export default Component;
