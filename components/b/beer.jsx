import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/ntnlrpxyy.css';
import '../../css/h/hy4riz1ee.css';
import '../../css/o/owx9dubqc.css';
import '../../css/r/rp-_c_aoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG40rWBerP" x1="0" x2="0" y1="2.39" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGDrqfILnY" x1="2.49" x2="21" y1="2.39" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG40rWBerP)" stroke="url(#SVGDrqfILnY)" class="ntnlrpxyy wm-k"/><path fill="url(#SVGDrqfILnY)" class="hy4riz1ee wm-a"/><path class="owx9dubqc wm-shine"/><path class="rp-_c_aoo wm-shine"/></g>`,
		"fallback": "withicons-lunar:beer",
	});
}

export default Component;
