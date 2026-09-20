import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1dzk987n.css';
import '../../css/k/knakeobkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j1dzk987n"/><path clip-rule="evenodd" class="knakeobkq"/></g>`,
		"fallback": "solar:gallery-favorite-bold-duotone",
	});
}

export default Component;
