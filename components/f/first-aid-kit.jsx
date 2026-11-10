import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7r0mabud.css';
import '../../css/t/t4f9op9bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7r0mabud"/><path class="t4f9op9bg"/></g>`,
		"fallback": "andrsrxn:first-aid-kit",
	});
}

export default Component;
