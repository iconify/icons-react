import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/x6b-k_-kl.css';
import '../../css/s/srrqvbfnh.css';
import '../../css/o/oaq68pz9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWvm4NcmY" x1="2.07" x2="21.93" y1="2.07" y2="21.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGWvm4NcmY)" class="wm-k x6b-k_-kl"/><path class="srrqvbfnh wm-shine"/><path class="oaq68pz9u wm-shine"/></g>`,
		"fallback": "withicons-lunar:bone",
	});
}

export default Component;
