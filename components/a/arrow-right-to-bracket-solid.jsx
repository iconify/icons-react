import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/ke5x5lbvz.css';
import '../../css/u/uvmng1bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ke5x5lbvz"/><path class="uvmng1bjn"/></g>`,
		"fallback": "flowbite:arrow-right-to-bracket-solid",
	});
}

export default Component;
