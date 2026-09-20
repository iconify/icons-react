import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0rdqsbjc.css';
import '../../css/l/lasg3lkdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r0rdqsbjc"/><path class="lasg3lkdc"/></g>`,
		"fallback": "solar:box-minimalistic-broken",
	});
}

export default Component;
