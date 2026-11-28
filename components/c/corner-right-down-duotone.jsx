import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0ruddb4y.css';
import '../../css/u/uhpqbhf0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0ruddb4y secondary"/><path class="primary uhpqbhf0l"/></g>`,
		"fallback": "iconaut:corner-right-down-duotone",
	});
}

export default Component;
