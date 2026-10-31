import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/shppcxp5j.css';
import '../../css/n/n9ox6pb1u.css';
import '../../css/s/sxtcqbctl.css';
import '../../css/t/t0r62db8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkY6vKbgi" x1="9" x2="15" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGkY6vKbgi)" class="shppcxp5j"/><path class="n9ox6pb1u wm-shine"/><path class="sxtcqbctl wm-shine"/><path class="t0r62db8r wm-shine"/></g>`,
		"fallback": "withicons-utsav:avatar-owl",
	});
}

export default Component;
