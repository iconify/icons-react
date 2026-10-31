import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/m60clrb6d.css';
import '../../css/q/qe4yxebpn.css';
import '../../css/g/gkj256brq.css';
import '../../css/p/prwxpobdc.css';
import '../../css/v/v7pe9leth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOMOofbvN" x1="8.99" x2="14.99" y1="1.53" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGOMOofbvN)" class="m60clrb6d"/><path class="qe4yxebpn wm-a"/><path class="gkj256brq wm-shine"/><path class="prwxpobdc wm-shine"/><path class="v7pe9leth wm-shine"/></g>`,
		"fallback": "withicons-utsav:hammer",
	});
}

export default Component;
