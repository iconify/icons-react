import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vmxv0gbzs.css';
import '../../css/q/qu0_imbfd.css';
import '../../css/d/d_4bofohi.css';
import '../../css/y/ylmujju3z.css';
import '../../css/p/pf2ux0-qe.css';
import '../../css/r/ry52agbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vmxv0gbzs wm-shadow"/><path class="qu0_imbfd"/><path class="d_4bofohi"/><path class="ylmujju3z"/><path class="pf2ux0-qe wm-shine"/><path class="ry52agbal wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-left",
	});
}

export default Component;
