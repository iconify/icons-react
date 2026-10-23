import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd-q9i0oi.css';
import '../../css/i/ix4zi_etp.css';
import '../../css/l/l4vfhkbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pd-q9i0oi"/><path class="ix4zi_etp"/><path class="l4vfhkbco"/></g>`,
		"fallback": "andrsrxn:device-laptop-check",
	});
}

export default Component;
