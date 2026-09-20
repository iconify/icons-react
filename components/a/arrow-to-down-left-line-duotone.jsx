import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpaeen2al.css';
import '../../css/n/nuhkcv1ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cpaeen2al"/><path class="nuhkcv1ey"/></g>`,
		"fallback": "solar:arrow-to-down-left-line-duotone",
	});
}

export default Component;
