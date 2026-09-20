import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f3gj-6bzn.css';
import '../../css/d/d2paqerlk.css';
import '../../css/k/kk4e1dben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f3gj-6bzn"/><path class="d2paqerlk"/><path class="kk4e1dben"/></g>`,
		"fallback": "solar:folder-tree-bold",
	});
}

export default Component;
