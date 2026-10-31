import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7ti9jb6q.css';
import '../../css/p/p54b8hbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7ti9jb6q"/><path class="p54b8hbej"/></g>`,
		"fallback": "coolicons:duck-bulk-round",
	});
}

export default Component;
