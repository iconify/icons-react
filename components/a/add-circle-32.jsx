import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jl81vn0ac.css';
import '../../css/x/xvu7v1f8s.css';
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
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGau1xsAGW)" class="jl81vn0ac"/><path fill="url(#SVGYbPd5clO)" class="xvu7v1f8s"/><defs><linearGradient id="SVGau1xsAGW" x1="3" x2="22.323" y1="7.25" y2="27.326" gradientUnits="userSpaceOnUse"><stop class="r_dyu4sco"/><stop offset="1" class="newr62bds"/></linearGradient><linearGradient id="SVGYbPd5clO" x1="11.625" x2="15.921" y1="10.428" y2="25.592" gradientUnits="userSpaceOnUse"><stop class="vc--wpv5i"/><stop offset="1" class="y2n-rtl6f"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:add-circle-32",
	});
}

export default Component;
