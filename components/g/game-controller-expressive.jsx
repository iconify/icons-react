import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cr8x1jb2p.css';
import '../../css/j/j023bmbul.css';
import '../../css/y/ya1c3z94y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cr8x1jb2p"/><path clip-rule="evenodd" class="j023bmbul"/><path clip-rule="evenodd" class="ya1c3z94y"/></g>`,
		"fallback": "nrk:game-controller-expressive",
	});
}

export default Component;
