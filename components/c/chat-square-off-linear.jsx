import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3bsbmb9h.css';
import '../../css/j/j-zik85gg.css';
import '../../css/c/cwioucchd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3bsbmb9h"/><path class="j-zik85gg"/><path class="cwioucchd"/></g>`,
		"fallback": "solar:chat-square-off-linear",
	});
}

export default Component;
