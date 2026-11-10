import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6gk62thv.css';
import '../../css/o/o-yv5-6_q.css';
import '../../css/b/b-zzmab3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c6gk62thv"/><path class="o-yv5-6_q"/><path class="b-zzmab3g"/></g>`,
		"fallback": "andrsrxn:file-star",
	});
}

export default Component;
