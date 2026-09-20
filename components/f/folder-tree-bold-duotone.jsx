import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkz5p6blt.css';
import '../../css/f/f3gj-6bzn.css';
import '../../css/k/k8rsyn0ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xkz5p6blt"/><path class="f3gj-6bzn"/><path class="k8rsyn0ez"/></g>`,
		"fallback": "solar:folder-tree-bold-duotone",
	});
}

export default Component;
