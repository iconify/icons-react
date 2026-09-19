import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wm3k4sq6x.css';
import '../../css/f/fm0pxnbwp.css';
import '../../css/v/vqsfm7b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wm3k4sq6x"/><path clip-rule="evenodd" class="fm0pxnbwp"/><path class="vqsfm7b3t"/></g>`,
		"fallback": "healthicons:blood-rh-n-24px",
	});
}

export default Component;
