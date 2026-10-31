import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/ah5gk0b4n.css';
import '../../css/k/k9w02zbhz.css';
import '../../css/c/cdyi-5b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGioymobKe" x1="0" x2="0" y1="5.5" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGuYOAjd3X" x1="5.51" x2="18.5" y1="5.5" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGioymobKe)" stroke="url(#SVGuYOAjd3X)" class="ah5gk0b4n wm-k"/><path class="k9w02zbhz wm-shine"/><path class="cdyi-5b-h wm-shine"/></g>`,
		"fallback": "withicons-lunar:arrow-up-right",
	});
}

export default Component;
