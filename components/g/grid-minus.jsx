import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncw1o1b2z.css';
import '../../css/b/bxwd6x6yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncw1o1b2z"/><path class="bxwd6x6yl"/></g>`,
		"fallback": "andrsrxn:grid-minus",
	});
}

export default Component;
