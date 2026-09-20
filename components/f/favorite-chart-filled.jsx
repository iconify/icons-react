import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyd5s1dud.css';
import '../../css/d/d5_7j1b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fyd5s1dud"/><path class="d5_7j1b7w"/></g>`,
		"fallback": "reicon:favorite-chart-filled",
	});
}

export default Component;
