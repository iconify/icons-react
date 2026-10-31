import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/b/b4bijr7vf.css';
import '../../css/s/siv9v4das.css';
import '../../css/q/q8u-trc0l.css';
import '../../css/y/y-xamvboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdiD0bT2X" x1="4" x2="20" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGdiD0bT2X)" class="b4bijr7vf wm-k"/><path fill="url(#SVGdiD0bT2X)" class="siv9v4das wm-a"/><path class="q8u-trc0l wm-shine"/><path class="wm-shine y-xamvboc"/></g>`,
		"fallback": "withicons-lunar:backpack",
	});
}

export default Component;
