import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tb-reab7h.css';
import '../../css/d/duo8u5b0b.css';
import '../../css/d/dpswkyzrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tb-reab7h"/><path class="duo8u5b0b"/><path class="dpswkyzrt"/></g>`,
		"fallback": "solar:grid-2x2-close-line-duotone",
	});
}

export default Component;
