import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/jriw1fmyl.css';
import '../../css/s/s67gcgsyy.css';
import '../../css/y/yupo1_bwi.css';
import '../../css/o/o86uv7b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4VJTgdaL" x1="2.5" x2="21" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG4VJTgdaL)" class="jriw1fmyl wm-k"/><path class="s67gcgsyy wm-a"/><path class="wm-shine yupo1_bwi"/><path class="o86uv7b4q wm-shine"/></g>`,
		"fallback": "withicons-lunar:golf",
	});
}

export default Component;
