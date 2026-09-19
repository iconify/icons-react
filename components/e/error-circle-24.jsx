import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rox4yzb_b.css';
import '../../css/f/fbwn21_uf.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGFWu5PeGC)" class="rox4yzb_b"/><path fill="url(#SVG5z9hYdBL)" class="fbwn21_uf"/><defs><linearGradient id="SVGFWu5PeGC" x1="5.125" x2="18.25" y1="-1.125" y2="23.875" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVG5z9hYdBL" x1="9.332" x2="14.134" y1="7" y2="17.252" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:error-circle-24",
	});
}

export default Component;
