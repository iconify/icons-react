import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okezpobnk.css';
import '../../css/m/mk_k2ibmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="okezpobnk"/><path class="mk_k2ibmk"/></g>`,
		"fallback": "coolicons:cookie-bulk-round",
	});
}

export default Component;
