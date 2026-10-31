import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/daoyvibtl.css';
import '../../css/e/e2bxmiuak.css';
import '../../css/t/t2fsspbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGiH0jDdjq" x1="2" x2="22" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGiH0jDdjq)" class="daoyvibtl wm-k"/><path fill="url(#SVGiH0jDdjq)" class="e2bxmiuak wm-a"/><path class="t2fsspbkz wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-gantt",
	});
}

export default Component;
