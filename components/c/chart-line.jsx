import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0hjrrbpt.css';
import '../../css/p/p2uuk1bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0hjrrbpt"/><path class="p2uuk1bjt"/></g>`,
		"fallback": "reicon:chart-line",
	});
}

export default Component;
