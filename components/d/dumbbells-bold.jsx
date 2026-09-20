import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cfxvs4bkr.css';
import '../../css/o/o77wckbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cfxvs4bkr"/><path class="o77wckbdj"/></g>`,
		"fallback": "solar:dumbbells-bold",
	});
}

export default Component;
