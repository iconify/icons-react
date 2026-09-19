import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rs8zf43rq.css';
import '../../css/y/y0aat8bvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rs8zf43rq"/><path clip-rule="evenodd" class="y0aat8bvb"/></g>`,
		"fallback": "gg:eye-alt",
	});
}

export default Component;
