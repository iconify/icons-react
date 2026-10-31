import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/ig4tz9e6g.css';
import '../../css/h/h6w1r5bgv.css';
import '../../css/r/rpxfx_byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwGeJqeNm" x1="5.51" x2="19.99" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGwGeJqeNm)" class="ig4tz9e6g wm-k"/><path class="h6w1r5bgv wm-shine"/><path class="rpxfx_byf wm-shine"/></g>`,
		"fallback": "withicons-lunar:ear",
	});
}

export default Component;
