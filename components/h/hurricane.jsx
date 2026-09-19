import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9s6hjbnb.css';
import '../../css/u/uy0wkvhnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9s6hjbnb"/><path class="uy0wkvhnc"/></g>`,
		"fallback": "griddy-icons:hurricane",
	});
}

export default Component;
