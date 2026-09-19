import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxsv3y3eg.css';
import '../../css/t/t8ka7ccve.css';
import '../../css/p/pcsmsxbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGifi64dEB)" class="lxsv3y3eg"/><defs><linearGradient id="SVGifi64dEB" x1="-2.376" x2="8.135" y1="-.938" y2="21.378" gradientUnits="userSpaceOnUse"><stop class="t8ka7ccve"/><stop offset="1" class="pcsmsxbuw"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:heart-24",
	});
}

export default Component;
