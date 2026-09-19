import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6q7iw6vx.css';
import '../../css/u/u95pdxf6v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6q7iw6vx"/><path class="u95pdxf6v"/></g>`,
		"fallback": "heroicons:document-duplicate-20-solid",
	});
}

export default Component;
