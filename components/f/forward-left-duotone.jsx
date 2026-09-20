import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4v-2sq5j.css';
import '../../css/p/psnud6blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u4v-2sq5j"/><path clip-rule="evenodd" class="psnud6blr"/></g>`,
		"fallback": "reicon:forward-left-duotone",
	});
}

export default Component;
