import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ngc-x6uui.css';
import '../../css/r/r-2jx60_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ngc-x6uui"/><path class="r-2jx60_j wm-s"/></g>`,
		"fallback": "withicons:heart-plus-solid",
	});
}

export default Component;
