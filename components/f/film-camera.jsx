import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_7qddbzb.css';
import '../../css/k/ki-bpcb8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j_7qddbzb"/><path class="ki-bpcb8q"/></g>`,
		"fallback": "at-icons:film-camera",
	});
}

export default Component;
