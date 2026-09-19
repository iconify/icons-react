import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d68_lj7pt.css';
import '../../css/t/tdxgf7blr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="d68_lj7pt"/><path class="tdxgf7blr"/></g>`,
		"fallback": "cryptocurrency-color:dgd",
	});
}

export default Component;
