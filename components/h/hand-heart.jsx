import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/ii6893zwe.css';
import '../../css/g/gq1zwqerj.css';
import '../../css/v/vagi86bxm.css';
import '../../css/u/udbzhgqqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG93BbWByz" x1="0" x2="0" y1="1.2" y2="22.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGCx86zdrI" x1="2" x2="21.98" y1="1.2" y2="22.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG93BbWByz)" stroke="url(#SVGCx86zdrI)" class="ii6893zwe wm-k"/><path fill="url(#SVGCx86zdrI)" class="gq1zwqerj wm-a"/><path class="vagi86bxm wm-shine"/><path class="udbzhgqqy wm-shine"/></g>`,
		"fallback": "withicons-lunar:hand-heart",
	});
}

export default Component;
