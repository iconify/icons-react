import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1y2cgvyp.css';
import '../../css/x/xes0d0n9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1y2cgvyp"/><path class="xes0d0n9g"/></g>`,
		"fallback": "reicon:data-filled",
	});
}

export default Component;
