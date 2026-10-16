import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-8lqbbpt.css';
import '../../css/h/hr2bfebyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-8lqbbpt"/><rect transform="matrix(0 -1 -1 0 20.43 17.79)" class="hr2bfebyz"/></g>`,
		"fallback": "andrsrxn:drop-shadow",
	});
}

export default Component;
