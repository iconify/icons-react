import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxi960bxt.css';
import '../../css/y/yu2y7hbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sxi960bxt"/><path class="yu2y7hbmc"/></g>`,
		"fallback": "coolicons:distribute-horizontal-bulk-round",
	});
}

export default Component;
