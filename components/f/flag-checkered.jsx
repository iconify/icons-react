import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/o/orz5fxb9n.css';
import '../../css/y/y3tk2nsap.css';
import '../../css/l/lmd1_kb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3DcAUuQB" x1="4" x2="21" y1="1.56" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG3DcAUuQB)" class="orz5fxb9n wm-k"/><path class="wm-shine y3tk2nsap"/><path class="lmd1_kb-b wm-shine"/></g>`,
		"fallback": "withicons-lunar:flag-checkered",
	});
}

export default Component;
