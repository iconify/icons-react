import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/egaacjb1q.css';
import '../../css/p/p9awj2fhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="egaacjb1q"/><path class="p9awj2fhy"/></g>`,
		"fallback": "reicon:arrow-right-duotone",
	});
}

export default Component;
