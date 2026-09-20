import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dmavm9j8k.css';
import '../../css/p/p88v8xbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dmavm9j8k"/><path class="p88v8xbgv"/></g>`,
		"fallback": "reicon:document-cloud-filled",
	});
}

export default Component;
