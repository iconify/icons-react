import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_-gs23hi.css';
import '../../css/l/lt6gdhbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_-gs23hi"/><path class="lt6gdhbmx"/></g>`,
		"fallback": "reicon:document-filter-filled",
	});
}

export default Component;
