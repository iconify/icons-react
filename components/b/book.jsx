import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7--g6qpb.css';
import '../../css/y/yit-9fzsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v7--g6qpb"/><path clip-rule="evenodd" class="yit-9fzsu"/></g>`,
		"fallback": "reicon:book",
	});
}

export default Component;
