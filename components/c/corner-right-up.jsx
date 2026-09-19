import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/i/irtdzvbfh.css';
import '../../css/e/egnh3w4pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="irtdzvbfh"/><path class="egnh3w4pn"/></g>`,
		"fallback": "humbleicons:corner-right-up",
	});
}

export default Component;
