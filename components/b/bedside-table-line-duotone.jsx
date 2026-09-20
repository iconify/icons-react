import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/a/axy_-vb0r.css';
import '../../css/r/rho2h4_9z.css';
import '../../css/u/u3xw_g32v.css';
import '../../css/u/u-d3qccyr.css';
import '../../css/v/vy5waob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="ix2yyfqqg"/><path class="axy_-vb0r"/><path class="rho2h4_9z"/><path class="u3xw_g32v"/><path class="u-d3qccyr"/><path class="vy5waob-q"/></g>`,
		"fallback": "solar:bedside-table-line-duotone",
	});
}

export default Component;
