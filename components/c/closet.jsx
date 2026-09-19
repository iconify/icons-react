import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agd9mab_q.css';
import '../../css/b/bz45-yz4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agd9mab_q"/><path class="bz45-yz4k"/></g>`,
		"fallback": "griddy-icons:closet",
	});
}

export default Component;
