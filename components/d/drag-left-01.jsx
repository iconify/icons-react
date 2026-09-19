import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jbqthiazi.css';
import '../../css/d/d_1y8tbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jbqthiazi"/><path class="d_1y8tbvv"/></g>`,
		"fallback": "hugeicons:drag-left-01",
	});
}

export default Component;
