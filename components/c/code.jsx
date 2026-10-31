import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jwavoch6p.css';
import '../../css/y/yfoambcqa.css';
import '../../css/n/nq_8ikpiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jwavoch6p wm-shadow"/><path class="wm-shadow yfoambcqa"/><path class="nq_8ikpiz"/></g>`,
		"fallback": "withicons-brutal:code",
	});
}

export default Component;
