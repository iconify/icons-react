import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/drbzacc-b.css';
import '../../css/h/hkrz-8b6k.css';
import '../../css/e/e_xtotenz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="drbzacc-b"/><path class="hkrz-8b6k"/><path class="e_xtotenz"/></g>`,
		"fallback": "hugeicons:dirham",
	});
}

export default Component;
