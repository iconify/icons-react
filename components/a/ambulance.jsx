import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i20di2-ec.css';
import '../../css/u/ucsju4bxa.css';
import '../../css/k/k9a46-b7g.css';
import '../../css/u/uqujcjbbz.css';
import '../../css/u/uuvtc0fgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMEqEgdLs" x1="9" x2="15" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="i20di2-ec wm-s"/><path fill="url(#SVGMEqEgdLs)" class="ucsju4bxa"/><path class="k9a46-b7g wm-a"/><path class="uqujcjbbz wm-s"/><path class="uuvtc0fgm wm-shine"/></g>`,
		"fallback": "withicons-utsav:ambulance",
	});
}

export default Component;
