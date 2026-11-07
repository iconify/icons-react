import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pjgsxlbss.css';
import '../../css/c/cxzlycbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pjgsxlbss"/><path class="cxzlycbfj"/></g>`,
		"fallback": "solar:bolt-circle-line-duotone",
	});
}

export default Component;
