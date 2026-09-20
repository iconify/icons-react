import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_eb1n8jx.css';
import '../../css/w/w0751wrni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_eb1n8jx"/><path clip-rule="evenodd" class="w0751wrni"/></g>`,
		"fallback": "reicon:bag-music2-filled",
	});
}

export default Component;
