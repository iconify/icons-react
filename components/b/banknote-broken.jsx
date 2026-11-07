import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4hg72bzc.css';
import '../../css/i/i46k68_po.css';
import '../../css/e/e710k_wmh.css';
import '../../css/z/zu7_43bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w4hg72bzc"/><path class="i46k68_po"/><path class="e710k_wmh"/><path class="zu7_43bri"/></g>`,
		"fallback": "solar:banknote-broken",
	});
}

export default Component;
