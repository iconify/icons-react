import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dua8mtbim.css';
import '../../css/z/zmzynclus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dua8mtbim"/><path clip-rule="evenodd" class="zmzynclus"/></g>`,
		"fallback": "nrk:calendar-expressive",
	});
}

export default Component;
