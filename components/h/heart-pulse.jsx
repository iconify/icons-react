import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5qwec90i.css';
import '../../css/s/s-5irmygb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d5qwec90i"/><path clip-rule="evenodd" class="s-5irmygb"/></g>`,
		"fallback": "reicon:heart-pulse",
	});
}

export default Component;
