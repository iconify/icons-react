import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6qf6sbpb.css';
import '../../css/o/onmhi29cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6qf6sbpb"/><path clip-rule="evenodd" class="onmhi29cj"/></g>`,
		"fallback": "reicon:forward-left-filled",
	});
}

export default Component;
