import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/ray4its5i.css';
import '../../css/k/ks_5_db4o.css';
import '../../css/x/xp8oucb9g.css';
import '../../css/a/ayq45hbff.css';
import '../../css/m/m0hxc9h0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgtZereoY" x1="1.65" x2="22.44" y1="4.88" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGgtZereoY)" class="ray4its5i wm-k"/><path class="ks_5_db4o wm-shine"/><path class="wm-shine xp8oucb9g"/><path class="ayq45hbff wm-shine"/><path class="m0hxc9h0w wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud",
	});
}

export default Component;
