import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/t/t8z19oenk.css';
import '../../css/i/i8bppubde.css';
import '../../css/v/vs052ibta.css';
import '../../css/n/nxnr_tbxl.css';
import '../../css/y/y18sgjb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="t8z19oenk"/><path class="i8bppubde"/><path class="vs052ibta"/><path class="nxnr_tbxl"/><path class="y18sgjb2p"/></g>`,
		"fallback": "withicons-retro:clock",
	});
}

export default Component;
