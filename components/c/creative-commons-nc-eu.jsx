import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkakhcc8x.css';
import '../../css/e/e5_q-rbbx.css';
import '../../css/k/kj4xhxbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pkakhcc8x"/><path class="e5_q-rbbx"/><path class="kj4xhxbdq"/></g>`,
		"fallback": "andrsrxn:creative-commons-nc-eu",
	});
}

export default Component;
