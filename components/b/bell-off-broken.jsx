import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dirz042nc.css';
import '../../css/x/xdy3g3xzv.css';
import '../../css/t/tihjbyfia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dirz042nc"/><path class="xdy3g3xzv"/><path class="tihjbyfia"/></g>`,
		"fallback": "solar:bell-off-broken",
	});
}

export default Component;
