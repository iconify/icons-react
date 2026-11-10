import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_q-e4nez.css';
import '../../css/k/k-4q1ibvo.css';
import '../../css/w/wdffwlbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l_q-e4nez"/><path class="k-4q1ibvo"/><path class="wdffwlbxg"/></g>`,
		"fallback": "andrsrxn:book-bookmark",
	});
}

export default Component;
