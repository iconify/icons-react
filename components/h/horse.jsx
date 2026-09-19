import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddc6_swix.css';
import '../../css/i/i32b4i6ye.css';
import '../../css/w/w966n2bvb.css';
import '../../css/x/x-v16bclk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ddc6_swix"/><path class="i32b4i6ye"/><path class="w966n2bvb"/><path class="x-v16bclk"/></g>`,
		"fallback": "hugeicons:horse",
	});
}

export default Component;
