import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nbj800bqd.css';
import '../../css/t/tprph5brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nbj800bqd"/><path class="tprph5brx"/></g>`,
		"fallback": "reicon:export4-filled",
	});
}

export default Component;
