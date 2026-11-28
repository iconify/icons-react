import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psxbs1bui.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/o/onyp57bvu.css';
import '../../css/b/bzgxxdrns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psxbs1bui secondary"/><g class="dt0cm9dhy primary"><path class="l4--ovbba"/><path class="onyp57bvu"/><path class="bzgxxdrns"/></g>`,
		"fallback": "iconaut:badge-euro-duo",
	});
}

export default Component;
