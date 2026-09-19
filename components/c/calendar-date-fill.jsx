import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5740ttdk.css';
import '../../css/y/y40ejmb1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y5740ttdk"/><path class="y40ejmb1p"/></g>`,
		"fallback": "bi:calendar-date-fill",
	});
}

export default Component;
