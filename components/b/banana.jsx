import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uh-_hdbdg.css';
import '../../css/n/nyqj_y97o.css';
import '../../css/u/uw6s41byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJsLZlceX" x1="0" x2="0" y1="3.17" y2="20.18" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGjEeFnd7d" x1="1.41" x2="20.6" y1="3.17" y2="20.18" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGJsLZlceX)" stroke="url(#SVGjEeFnd7d)" class="uh-_hdbdg wm-k"/><path fill="url(#SVGjEeFnd7d)" class="nyqj_y97o wm-a"/><path class="uw6s41byn wm-shine"/></g>`,
		"fallback": "withicons-lunar:banana",
	});
}

export default Component;
