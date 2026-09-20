import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k77tqcqcu.css';
import '../../css/j/jk2unp63q.css';
import '../../css/a/a9zj7tg5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k77tqcqcu"/><path class="jk2unp63q"/><path class="a9zj7tg5y"/></g>`,
		"fallback": "reicon:heart-shine-duotone",
	});
}

export default Component;
