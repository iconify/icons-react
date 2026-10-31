import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/c/cbtd1_bdh.css';
import '../../css/h/hs3ggwbfn.css';
import '../../css/h/hj9ff4z1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGluqm41VF" x1="1.5" x2="22.5" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGluqm41VF)" class="cbtd1_bdh wm-k"/><path class="hs3ggwbfn wm-shine"/><path class="hj9ff4z1z wm-shine"/></g>`,
		"fallback": "withicons-lunar:dumbbell",
	});
}

export default Component;
