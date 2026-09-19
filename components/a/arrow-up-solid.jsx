import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hhwr3x3gm.css';
import '../../css/g/g4-7lj-qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="hhwr3x3gm"/><path class="g4-7lj-qx"/></g>`,
		"fallback": "flowbite:arrow-up-solid",
	});
}

export default Component;
