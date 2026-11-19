import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htel1pppx.css';
import '../../css/b/b1vm5lb8u.css';
import '../../css/q/q3_r_qbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htel1pppx"/><path class="b1vm5lb8u"/><path class="q3_r_qbcj"/></g>`,
		"fallback": "andrsrxn:experiment-x",
	});
}

export default Component;
