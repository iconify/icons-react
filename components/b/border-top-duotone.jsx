import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fc0wyxb1w.css';
import '../../css/i/iizhprbhg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fc0wyxb1w"/><path class="iizhprbhg"/></g>`,
		"fallback": "pullo:border-top-duotone",
	});
}

export default Component;
