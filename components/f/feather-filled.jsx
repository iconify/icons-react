import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkbir6bzz.css';
import '../../css/i/ikwb68qrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jkbir6bzz"/><path class="ikwb68qrd"/></g>`,
		"fallback": "tabler:feather-filled",
	});
}

export default Component;
