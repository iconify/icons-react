import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yipqe24sd.css';
import '../../css/d/dp--qdbnh.css';
import '../../css/p/pj_w4ob_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yipqe24sd"/><path class="dp--qdbnh"/><path class="pj_w4ob_p"/></g>`,
		"fallback": "andrsrxn:hammer",
	});
}

export default Component;
