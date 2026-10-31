import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r--hg2bnd.css';
import '../../css/d/dwxb8orqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r--hg2bnd"/><path class="dwxb8orqw"/></g>`,
		"fallback": "coolicons:filter-off-bulk-round",
	});
}

export default Component;
