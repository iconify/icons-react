import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ncc8p1b6g.css';
import '../../css/g/gv3j3pb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ncc8p1b6g"/><path clip-rule="evenodd" class="gv3j3pb0k"/></g>`,
		"fallback": "solar:chat-square-arrow-bold-duotone",
	});
}

export default Component;
