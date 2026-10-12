import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvkkqed9o.css';
import '../../css/o/op9e02b7c.css';
import '../../css/y/ybmfr0bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vvkkqed9o"/><path class="op9e02b7c"/><path class="ybmfr0bei"/></g>`,
		"fallback": "andrsrxn:face-laugh",
	});
}

export default Component;
