import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/msg0u7sde.css';
import '../../css/y/y6mx4_bvf.css';
import '../../css/u/uqhik9b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="msg0u7sde"/><path class="y6mx4_bvf"/><path class="uqhik9b3f"/></g>`,
		"fallback": "solar:history-3-broken",
	});
}

export default Component;
