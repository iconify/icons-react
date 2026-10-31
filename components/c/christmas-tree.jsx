import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uh0s_c9jx.css';
import '../../css/t/tiw6-acoa.css';
import '../../css/l/lu5an-bcf.css';
import '../../css/g/grv89_bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTo4kneIc" x1="0" x2="0" y1="1.01" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGv7pb5bPC" x1="3.5" x2="20.48" y1="1.01" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGTo4kneIc)" stroke="url(#SVGv7pb5bPC)" class="uh0s_c9jx wm-k"/><path fill="url(#SVGv7pb5bPC)" class="tiw6-acoa wm-a"/><path class="lu5an-bcf wm-shine"/><path class="grv89_bqs wm-shine"/></g>`,
		"fallback": "withicons-lunar:christmas-tree",
	});
}

export default Component;
