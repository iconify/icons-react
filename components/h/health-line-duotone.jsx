import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s7_b3absx.css';
import '../../css/f/f1s09-5xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s7_b3absx"/><path class="f1s09-5xg"/></g>`,
		"fallback": "solar:health-line-duotone",
	});
}

export default Component;
