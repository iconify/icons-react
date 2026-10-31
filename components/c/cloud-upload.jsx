import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tvio08zcc.css';
import '../../css/t/t_3mj7bce.css';
import '../../css/w/w_zfwg5sc.css';
import '../../css/p/p54i3kafa.css';
import '../../css/l/lnck8lb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMveWEbFX" x1="9" x2="15" y1="1.37" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMveWEbFX)" class="tvio08zcc"/><path class="t_3mj7bce wm-s"/><path class="w_zfwg5sc wm-shine"/><path class="p54i3kafa wm-shine"/><path class="lnck8lb8p wm-shine"/></g>`,
		"fallback": "withicons-utsav:cloud-upload",
	});
}

export default Component;
