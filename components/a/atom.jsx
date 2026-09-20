import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/z/ziwdpcc0f.css';
import '../../css/t/tpj0ncgxu.css';
import '../../css/h/hx9bl1h1k.css';
import '../../css/g/gwu95cbrw.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><rect fill="url(#SVGJ5N5Ecfn)" class="ex-9i5bwz"/><path class="ziwdpcc0f"/><path class="tpj0ncgxu"/><defs><linearGradient id="SVGJ5N5Ecfn" x1="128" x2="128" y1="10.14" y2="256" gradientUnits="userSpaceOnUse"><stop class="hx9bl1h1k"/><stop offset="1" class="gwu95cbrw"/></linearGradient></defs></g>`,
		"fallback": "skill-icons:atom",
	});
}

export default Component;
