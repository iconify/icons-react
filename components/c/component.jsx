import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xaw9m5boi.css';
import '../../css/b/brhlulm4n.css';
import '../../css/o/olm5ic6fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1Rh5hcXc" x1="9" x2="15" y1="1.31" y2="22.69" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG1Rh5hcXc)" class="xaw9m5boi"/><path class="brhlulm4n wm-a"/><path class="olm5ic6fe wm-shine"/></g>`,
		"fallback": "withicons-utsav:component",
	});
}

export default Component;
