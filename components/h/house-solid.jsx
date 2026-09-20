import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uu9ihmb5x.css';
import '../../css/g/gy8yueb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uu9ihmb5x"/><path class="gy8yueb9y"/></g>`,
		"fallback": "nrk:house-solid",
	});
}

export default Component;
