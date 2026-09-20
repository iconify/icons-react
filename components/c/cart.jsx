import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq7r2743t.css';
import '../../css/m/my3_w-b2x.css';
import '../../css/d/dfy9v9wqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq7r2743t"/><path clip-rule="evenodd" class="my3_w-b2x"/><path class="dfy9v9wqo"/></g>`,
		"fallback": "pepicons-pencil:cart",
	});
}

export default Component;
