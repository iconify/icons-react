import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fzcquqq8x.css';
import '../../css/w/wrfd5_glg.css';
import '../../css/z/z_l70ebjj.css';
import '../../css/t/tpba_dmxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMhNQ1bfo" x1="8.99" x2="14.99" y1="5.63" y2="20.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMhNQ1bfo)" class="fzcquqq8x"/><path class="wm-shine wrfd5_glg"/><path class="wm-shine z_l70ebjj"/><path class="tpba_dmxc wm-shine"/></g>`,
		"fallback": "withicons-utsav:dumpling",
	});
}

export default Component;
