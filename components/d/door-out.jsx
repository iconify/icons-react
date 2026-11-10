import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1qthsl8v.css';
import '../../css/x/xvf0leb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1qthsl8v"/><path class="xvf0leb3k"/></g>`,
		"fallback": "andrsrxn:door-out",
	});
}

export default Component;
