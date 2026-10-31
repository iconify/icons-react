import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pd583sppo.css';
import '../../css/m/mpubfw_8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pd583sppo"/><path class="mpubfw_8a"/></g>`,
		"fallback": "coolicons:cloud-moon-bulk-round",
	});
}

export default Component;
