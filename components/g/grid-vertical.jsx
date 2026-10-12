import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj5bu7vpf.css';
import '../../css/j/j4n158kgw.css';
import '../../css/k/k55jjj4-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hj5bu7vpf"/><rect transform="matrix(1 0 0 -1 12.16 21.4)" class="j4n158kgw"/><path class="k55jjj4-u"/></g>`,
		"fallback": "andrsrxn:grid-vertical",
	});
}

export default Component;
