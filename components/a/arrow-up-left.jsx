import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/z/zokzk-b9c.css';
import '../../css/y/ykmv5dm3v.css';
import '../../css/r/rkfbm4b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGioymobKe" x1="0" x2="0" y1="5.5" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG70YZ3LLh" x1="5.5" x2="18.49" y1="5.5" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGioymobKe)" stroke="url(#SVG70YZ3LLh)" class="wm-k zokzk-b9c"/><path class="wm-shine ykmv5dm3v"/><path class="rkfbm4b_o wm-shine"/></g>`,
		"fallback": "withicons-lunar:arrow-up-left",
	});
}

export default Component;
