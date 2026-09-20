import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrp-jph9p.css';
import '../../css/a/as8t1qb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wrp-jph9p"/><path class="as8t1qb_a"/></g>`,
		"fallback": "solar:backpack-bold",
	});
}

export default Component;
