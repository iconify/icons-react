import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tihjbyfia.css';
import '../../css/x/xdy3g3xzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tihjbyfia"/><path class="xdy3g3xzv"/></g>`,
		"fallback": "solar:bell-broken",
	});
}

export default Component;
