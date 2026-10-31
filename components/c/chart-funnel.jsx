import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/b/bqm2t8bpj.css';
import '../../css/r/ri90enh3v.css';
import '../../css/l/lhb_agbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGri7ZCcRX" x1="2" x2="22" y1="3" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGri7ZCcRX)" class="bqm2t8bpj wm-k"/><path class="ri90enh3v wm-shine"/><path class="lhb_agbpc wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-funnel",
	});
}

export default Component;
