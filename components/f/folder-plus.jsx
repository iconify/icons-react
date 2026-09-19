import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d34t52bcx.css';
import '../../css/g/g8qa32bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d34t52bcx"/><path class="g8qa32bfx"/></g>`,
		"fallback": "hugeicons:folder-plus",
	});
}

export default Component;
