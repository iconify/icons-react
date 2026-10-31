import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/aw3n2ldbk.css';
import '../../css/e/er-0s8baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQ1JEUVmG" x1="9.01" x2="15.01" y1="4.54" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGQ1JEUVmG)" class="aw3n2ldbk"/><path class="er-0s8baw wm-shine"/></g>`,
		"fallback": "withicons-utsav:gift-stack",
	});
}

export default Component;
