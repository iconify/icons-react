import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dq68vybqn.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dq68vybqn"/><path class="i4dcgmbin"/></g>`,
		"fallback": "solar:folder-2-broken",
	});
}

export default Component;
