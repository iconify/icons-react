import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/eaxn0-8ht.css';
import '../../css/x/x--q46yqk.css';
import '../../css/f/fl_e57bjb.css';
import '../../css/d/dfle_zboj.css';
import '../../css/g/gvssp8biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAu5Cie3F" x1="2" x2="21.5" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGAu5Cie3F)" class="eaxn0-8ht wm-k"/><path class="wm-shine x--q46yqk"/><path class="fl_e57bjb wm-shine"/><path class="dfle_zboj wm-shine"/><path class="gvssp8biw wm-shine"/></g>`,
		"fallback": "withicons-lunar:factory",
	});
}

export default Component;
