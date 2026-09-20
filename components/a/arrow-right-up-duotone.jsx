import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swh0pe22z.css';
import '../../css/o/oq1succxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="swh0pe22z"/><path class="oq1succxh"/></g>`,
		"fallback": "reicon:arrow-right-up-duotone",
	});
}

export default Component;
