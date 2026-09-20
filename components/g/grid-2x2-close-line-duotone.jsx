import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ptku9_7wa.css';
import '../../css/d/duo8u5b0b.css';
import '../../css/s/sukz5in0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ptku9_7wa"/><path class="duo8u5b0b"/><path class="sukz5in0f"/></g>`,
		"fallback": "solar:grid-2x2-close-line-duotone",
	});
}

export default Component;
