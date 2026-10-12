import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efqvfbamn.css';
import '../../css/k/kmr3b0icw.css';
import '../../css/j/jc4h7qbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="efqvfbamn"/><path class="kmr3b0icw"/><path class="jc4h7qbjh"/></g>`,
		"fallback": "andrsrxn:book-bookmark",
	});
}

export default Component;
