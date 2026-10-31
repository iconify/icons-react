import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/eeyfpxbzk.css';
import '../../css/e/eo1ja8pig.css';
import '../../css/l/l9af6nbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGID0zcb6g" x1="1.52" x2="22.5" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGID0zcb6g)" class="eeyfpxbzk wm-k"/><path fill="url(#SVGID0zcb6g)" class="eo1ja8pig wm-a"/><path class="l9af6nbia wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-column-stacked",
	});
}

export default Component;
