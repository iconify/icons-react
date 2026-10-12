import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1jb44d2h.css';
import '../../css/j/j4n158kgw.css';
import '../../css/i/i1y98nbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1jb44d2h"/><rect transform="matrix(0 -1 -1 0 21.24 12)" class="j4n158kgw"/><path class="i1y98nbbb"/></g>`,
		"fallback": "andrsrxn:grid-horizontal",
	});
}

export default Component;
