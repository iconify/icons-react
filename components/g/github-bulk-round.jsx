import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xi5p6qb0l.css';
import '../../css/z/z7g9aab6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xi5p6qb0l"/><path class="z7g9aab6q"/></g>`,
		"fallback": "coolicons:github-bulk-round",
	});
}

export default Component;
