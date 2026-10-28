import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi1wucbwc.css';
import '../../css/t/tqv8u6boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi1wucbwc"/><path class="tqv8u6boz"/></g>`,
		"fallback": "andrsrxn:bricks-check",
	});
}

export default Component;
