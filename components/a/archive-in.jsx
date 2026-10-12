import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7s5mac7j.css';
import '../../css/q/qkrf_2t-k.css';
import '../../css/j/jlojsyngt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.23 21.28)" class="j7s5mac7j"/><rect transform="matrix(0 -1 -1 0 22.23 21.28)" class="qkrf_2t-k"/><path class="jlojsyngt"/></g>`,
		"fallback": "andrsrxn:archive-in",
	});
}

export default Component;
