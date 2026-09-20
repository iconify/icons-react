import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpb908bcg.css';
import '../../css/m/mss8crb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mpb908bcg"/><path clip-rule="evenodd" class="mss8crb4b"/></g>`,
		"fallback": "reicon:file-smile-filled",
	});
}

export default Component;
