import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/o/opk29mbhf.css';
import '../../css/l/lk6arebsd.css';
import '../../css/e/eewi7fw_m.css';
import '../../css/z/zu3dvwanr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNCWunGqf" x1="0" x2="0" y1="2.2" y2="21.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGWmBzceut" x1="2.2" x2="21.8" y1="2.2" y2="21.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGNCWunGqf)" stroke="url(#SVGWmBzceut)" class="opk29mbhf wm-k"/><path class="lk6arebsd wm-shine"/><path fill="url(#SVGWmBzceut)" class="eewi7fw_m wm-a"/><path class="wm-shine zu3dvwanr"/></g>`,
		"fallback": "withicons-lunar:baguette",
	});
}

export default Component;
