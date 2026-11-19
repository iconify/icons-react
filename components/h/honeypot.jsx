import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z04ljg-8d.css';
import '../../css/i/im9nhsffl.css';
import '../../css/d/dgzkl0b4y.css';
import '../../css/d/d4zc-cfcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z04ljg-8d"/><path clip-rule="evenodd" class="im9nhsffl"/><path class="dgzkl0b4y"/><path class="d4zc-cfcc"/></g>`,
		"fallback": "andrsrxn:honeypot",
	});
}

export default Component;
