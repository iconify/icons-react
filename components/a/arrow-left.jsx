import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i6oc-3b_h.css';
import '../../css/x/xz4wdl0zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGaALuxeAJ" x1="9" x2="15" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGaALuxeAJ)" class="i6oc-3b_h"/><path class="wm-shine xz4wdl0zp"/></g>`,
		"fallback": "withicons-utsav:arrow-left",
	});
}

export default Component;
