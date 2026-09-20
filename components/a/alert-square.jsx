import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2tkpvsma.css';
import '../../css/m/mn704ge9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x2tkpvsma"/><path clip-rule="evenodd" class="mn704ge9u"/></g>`,
		"fallback": "reicon:alert-square",
	});
}

export default Component;
