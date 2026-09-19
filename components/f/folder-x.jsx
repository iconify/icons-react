import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d34t52bcx.css';
import '../../css/m/mksyvik_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d34t52bcx"/><path class="mksyvik_b"/></g>`,
		"fallback": "hugeicons:folder-x",
	});
}

export default Component;
