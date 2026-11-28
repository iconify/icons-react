import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_zwiwbff.css';
import '../../css/t/tw48n-b7k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_zwiwbff"/><path class="tw48n-b7k"/></g>`,
		"fallback": "pullo:calendar-pencil-duotone",
	});
}

export default Component;
