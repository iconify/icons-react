import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yszjebc_r.css';
import '../../css/w/wi7k_0wsa.css';
import '../../css/g/g0idq1bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yszjebc_r"/><path class="wi7k_0wsa"/><path class="g0idq1bnx"/></g>`,
		"fallback": "solar:align-vertical-spacing-broken",
	});
}

export default Component;
