import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/sbwqmmvzc.css';
import '../../css/l/lrc5qplhe.css';
import '../../css/y/y1e6t8bwz.css';
import '../../css/j/jwev_4gch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPpW2Cbkh" x1="9" x2="15" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPpW2Cbkh)" class="sbwqmmvzc"/><path class="lrc5qplhe wm-shine"/><path class="wm-shine y1e6t8bwz"/><path class="jwev_4gch wm-shine"/></g>`,
		"fallback": "withicons-utsav:credit-card",
	});
}

export default Component;
