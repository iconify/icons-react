import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqjy3ubut.css';
import '../../css/w/w5gpd7r3b.css';
import '../../css/g/gk8gx7whk.css';
import '../../css/h/h0zqot9pw.css';
import '../../css/a/alyihb0gj.css';
import '../../css/w/wk_lp_wlk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG46elwcsk)" class="eqjy3ubut"/><path fill="url(#SVGQMDY1c6m)" class="w5gpd7r3b"/><defs><linearGradient id="SVG46elwcsk" x1="3.875" x2="11.75" y1=".125" y2="15.125" gradientUnits="userSpaceOnUse"><stop class="gk8gx7whk"/><stop offset="1" class="h0zqot9pw"/></linearGradient><linearGradient id="SVGQMDY1c6m" x1="6" x2="9.213" y1="4.5" y2="11.844" gradientUnits="userSpaceOnUse"><stop class="alyihb0gj"/><stop offset="1" class="wk_lp_wlk"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:error-circle-16",
	});
}

export default Component;
