import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wre_ujfoe.css';
import '../../css/d/d83gx6k1k.css';
import '../../css/y/ysvyobcvx.css';
import '../../css/n/nhi2tpaak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wre_ujfoe"/><path class="d83gx6k1k"/><ellipse transform="matrix(1 0 0 -1 6.43 9.88)" class="ysvyobcvx"/><path class="nhi2tpaak"/></g>`,
		"fallback": "andrsrxn:coins",
	});
}

export default Component;
