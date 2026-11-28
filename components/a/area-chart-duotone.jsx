import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4j1l1eet.css';
import '../../css/v/v135eubqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4j1l1eet secondary"/><path class="primary v135eubqw"/></g>`,
		"fallback": "iconaut:area-chart-duotone",
	});
}

export default Component;
