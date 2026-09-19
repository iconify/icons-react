import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-whp5xlv.css';
import '../../css/w/wi3k8x65i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w-whp5xlv"/><path class="wi3k8x65i"/></g>`,
		"fallback": "bi:envelope-arrow-down",
	});
}

export default Component;
