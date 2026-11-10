import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9f-4-w2j.css';
import '../../css/u/uqxlb3b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9f-4-w2j"/><path class="uqxlb3b7d"/></g>`,
		"fallback": "andrsrxn:bricks",
	});
}

export default Component;
