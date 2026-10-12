import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym_-4-bcl.css';
import '../../css/t/t5ljtyb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="rotate(90 12 12)" class="ft5dv1b6b"><circle class="ym_-4-bcl"/><circle class="t5ljtyb4y"/></g>`,
		"fallback": "andrsrxn:circle-filled",
	});
}

export default Component;
