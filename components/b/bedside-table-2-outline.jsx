import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rg8vhvbio.css';
import '../../css/y/yrlx_k17q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rg8vhvbio"/><path clip-rule="evenodd" class="yrlx_k17q"/></g>`,
		"fallback": "solar:bedside-table-2-outline",
	});
}

export default Component;
