import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0rdqsbjc.css';
import '../../css/x/xe4h22b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r0rdqsbjc"/><path class="xe4h22b9l"/></g>`,
		"fallback": "solar:box-broken",
	});
}

export default Component;
