import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ixg_y7bhr.css';
import '../../css/a/a8-7ynb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ixg_y7bhr"/><path class="a8-7ynb9y"/></g>`,
		"fallback": "iconoir:double-check",
	});
}

export default Component;
