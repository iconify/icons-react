import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emyz53nin.css';
import '../../css/h/h3hi981wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emyz53nin"/><path class="h3hi981wt"/></g>`,
		"fallback": "andrsrxn:border-top",
	});
}

export default Component;
