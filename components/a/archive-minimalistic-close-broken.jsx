import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t6qgw5b9f.css';
import '../../css/p/p5qbbdc2d.css';
import '../../css/e/e1dpahbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t6qgw5b9f"/><path class="p5qbbdc2d"/><path class="e1dpahbxb"/></g>`,
		"fallback": "solar:archive-minimalistic-close-broken",
	});
}

export default Component;
