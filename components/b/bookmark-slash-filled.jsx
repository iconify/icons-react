import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tob50rbgd.css';
import '../../css/w/wr5q1e3do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tob50rbgd"/><path class="wr5q1e3do"/></g>`,
		"fallback": "reicon:bookmark-slash-filled",
	});
}

export default Component;
