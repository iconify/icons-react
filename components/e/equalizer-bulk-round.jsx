import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ua43k_mnx.css';
import '../../css/w/w3b1fp1ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ua43k_mnx"/><path class="w3b1fp1ch"/></g>`,
		"fallback": "coolicons:equalizer-bulk-round",
	});
}

export default Component;
