import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl81vn0ac.css';
import '../../css/d/d-q30kytt.css';
import '../../css/r/r_dyu4sco.css';
import '../../css/n/newr62bds.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y2n-rtl6f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGau1xsAGW)" class="jl81vn0ac"/><path fill="url(#SVG1TllfdHM)" class="d-q30kytt"/><defs><linearGradient id="SVGau1xsAGW" x1="3" x2="22.323" y1="7.25" y2="27.326" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVG1TllfdHM" x1="12.031" x2="14.162" y1="11.969" y2="22.66" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:checkmark-circle-32",
	});
}

export default Component;
