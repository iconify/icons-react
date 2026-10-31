import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/ww0y27bfj.css';
import '../../css/u/uwm6qh_ie.css';
import '../../css/z/zei5r0rin.css';
import '../../css/w/wxb_2fc6y.css';
import '../../css/q/q-h2pab8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ww0y27bfj"/><path class="uwm6qh_ie wm-shadow"/><path class="zei5r0rin"/><path class="wxb_2fc6y"/><path class="q-h2pab8b"/></g>`,
		"fallback": "withicons-brutal:contact",
	});
}

export default Component;
