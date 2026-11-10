import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmwqoie5k.css';
import '../../css/l/ls62l0b2z.css';
import '../../css/q/qo2yf7i4i.css';
import '../../css/f/f3_r5nbvw.css';
import '../../css/o/o_pj0k92n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cmwqoie5k"/><path class="ls62l0b2z"/><path class="qo2yf7i4i"/><path class="f3_r5nbvw"/><path class="o_pj0k92n"/></g>`,
		"fallback": "andrsrxn:book-wifi",
	});
}

export default Component;
