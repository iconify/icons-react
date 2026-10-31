import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/b/b64mmjchv.css';
import '../../css/k/kb2z5ubdz.css';
import '../../css/d/dez0b2b2a.css';
import '../../css/i/igum5nugl.css';
import '../../css/b/b5y9r7bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="b64mmjchv"/><path class="kb2z5ubdz"/><path class="dez0b2b2a"/><path class="igum5nugl"/><path class="b5y9r7bdn"/></g>`,
		"fallback": "withicons-retro:circle-dollar-sign",
	});
}

export default Component;
