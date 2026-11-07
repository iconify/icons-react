import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/olzcyy-nh.css';
import '../../css/r/rgk5izb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="olzcyy-nh"/><path class="rgk5izb5e"/></g>`,
		"fallback": "solar:fire-broken",
	});
}

export default Component;
