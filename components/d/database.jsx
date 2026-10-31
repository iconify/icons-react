import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/woehwfmxe.css';
import '../../css/e/epsxnhkuw.css';
import '../../css/i/innhjlthl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbwiL3cDj" x1="3" x2="21" y1="1.5" y2="22.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGbwiL3cDj)" class="wm-k woehwfmxe"/><path class="epsxnhkuw wm-shine"/><path class="innhjlthl wm-shine"/></g>`,
		"fallback": "withicons-lunar:database",
	});
}

export default Component;
