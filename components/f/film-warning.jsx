import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3qr8vuik.css';
import '../../css/n/n7l88_b1z.css';
import '../../css/q/qu9fsbcko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3qr8vuik"/><path class="n7l88_b1z"/><path class="qu9fsbcko"/></g>`,
		"fallback": "andrsrxn:film-warning",
	});
}

export default Component;
