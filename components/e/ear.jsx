import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e5n73cbmr.css';
import '../../css/r/rkult591x.css';
import '../../css/q/q_1ry0b8i.css';
import '../../css/u/ug8y1kbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e5n73cbmr wm-shadow"/><path class="rkult591x wm-shadow"/><path class="q_1ry0b8i"/><path class="ug8y1kbuy"/></g>`,
		"fallback": "withicons-brutal:ear",
	});
}

export default Component;
