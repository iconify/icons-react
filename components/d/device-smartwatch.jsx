import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob63bsb4b.css';
import '../../css/g/gyh9vjbcd.css';
import '../../css/i/i8rje_bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ob63bsb4b"/><path class="gyh9vjbcd"/><path class="i8rje_bjc"/></g>`,
		"fallback": "andrsrxn:device-smartwatch",
	});
}

export default Component;
