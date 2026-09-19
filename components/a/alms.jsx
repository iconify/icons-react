import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ed726db9v.css';
import '../../css/f/fejopr8se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ed726db9v"/><path class="fejopr8se"/></g>`,
		"fallback": "hugeicons:alms",
	});
}

export default Component;
