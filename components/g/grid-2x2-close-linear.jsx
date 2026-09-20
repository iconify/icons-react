import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/duo8u5b0b.css';
import '../../css/s/s6deurbms.css';
import '../../css/k/kt_jy-ber.css';
import '../../css/p/ptku9_7wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="duo8u5b0b"/><path class="s6deurbms"/><path class="kt_jy-ber"/><path class="ptku9_7wa"/></g>`,
		"fallback": "solar:grid-2x2-close-linear",
	});
}

export default Component;
