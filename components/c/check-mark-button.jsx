import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5e2kbc5z.css';
import '../../css/h/ho0k_acab.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ijy0jnbrd.css';
import '../../css/i/i64oqpblh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5e2kbc5z"/><path class="ho0k_acab"/><g class="ij2x_72vy"><path class="ijy0jnbrd"/><path class="i64oqpblh"/></g>`,
		"fallback": "openmoji:check-mark-button",
	});
}

export default Component;
