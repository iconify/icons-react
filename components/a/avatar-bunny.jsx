import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/dyfj1ub6p.css';
import '../../css/l/losxuxkvp.css';
import '../../css/z/zqcexfauw.css';
import '../../css/j/jd8rkn48x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYBT2JcSv" x1="4.75" x2="19.25" y1=".89" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="dyfj1ub6p wm-k"/><path fill="url(#SVGYBT2JcSv)" class="losxuxkvp wm-a"/><path class="wm-shine zqcexfauw"/><path class="jd8rkn48x wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-bunny",
	});
}

export default Component;
