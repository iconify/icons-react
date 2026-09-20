import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urqofibnx.css';
import '../../css/m/mpsc8umxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="urqofibnx"/><path class="mpsc8umxg"/></g>`,
		"fallback": "nrk:clock-and-dot",
	});
}

export default Component;
