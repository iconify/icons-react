import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/perf5ls0j.css';
import '../../css/e/ezafw_b_i.css';
import '../../css/p/pwpv-j7yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuSetddTE" x1="0" x2="0" y1="6" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGouZQyjVv" x1="1.02" x2="22.99" y1="6" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGuSetddTE)" stroke="url(#SVGouZQyjVv)" class="perf5ls0j wm-k"/><path fill="url(#SVGouZQyjVv)" class="ezafw_b_i wm-a"/><path class="pwpv-j7yn wm-shine"/></g>`,
		"fallback": "withicons-lunar:battery",
	});
}

export default Component;
