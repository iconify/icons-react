import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/k55evtbjv.css';
import '../../css/e/e5eks4bzm.css';
import '../../css/j/jzu3uoief.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6gec6cka" x1="9.01" x2="15.01" y1="6" y2="18" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6gec6cka)" class="k55evtbjv"/><path class="e5eks4bzm wm-a"/><path class="jzu3uoief wm-shine"/></g>`,
		"fallback": "withicons-utsav:battery-medium",
	});
}

export default Component;
