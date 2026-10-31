import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xojwotr0t.css';
import '../../css/c/cbdq0zbqq.css';
import '../../css/x/xk7br34gn.css';
import '../../css/g/gt4ls0bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBD50FVHg" x1="8.99" x2="14.99" y1="2.75" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGBD50FVHg)" class="xojwotr0t"/><path class="cbdq0zbqq wm-shine"/><path class="wm-shine xk7br34gn"/><path class="gt4ls0bpv wm-shine"/></g>`,
		"fallback": "withicons-utsav:avatar-fox",
	});
}

export default Component;
