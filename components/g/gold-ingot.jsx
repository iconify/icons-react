import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/ir2tw_bue.css';
import '../../css/w/wqo0m09jy.css';
import '../../css/x/xe_1abc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGp7ce0cRs" x1="1.01" x2="23" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGp7ce0cRs)" class="ir2tw_bue wm-k"/><path fill="url(#SVGp7ce0cRs)" class="wm-a wqo0m09jy"/><path class="wm-shine xe_1abc5v"/></g>`,
		"fallback": "withicons-lunar:gold-ingot",
	});
}

export default Component;
