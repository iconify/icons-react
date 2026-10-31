import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/y/yjope-dxb.css';
import '../../css/n/nx4uoy9jv.css';
import '../../css/j/j85pkeqzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOk3mbdTd" x1="1.67" x2="22.33" y1="1.7" y2="22.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGOk3mbdTd)" class="wm-k yjope-dxb"/><path class="nx4uoy9jv wm-shine"/><path class="j85pkeqzh wm-shine"/></g>`,
		"fallback": "withicons-lunar:bandage",
	});
}

export default Component;
