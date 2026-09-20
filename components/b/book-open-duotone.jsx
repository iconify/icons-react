import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxng_sloi.css';
import '../../css/l/lq3akkbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mxng_sloi"/><path class="lq3akkbpv"/></g>`,
		"fallback": "keyline-icons:book-open-duotone",
	});
}

export default Component;
