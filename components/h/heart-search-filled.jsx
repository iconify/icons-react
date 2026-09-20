import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dh5nq1b7o.css';
import '../../css/i/icp4u99wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dh5nq1b7o"/><path class="icp4u99wm"/></g>`,
		"fallback": "reicon:heart-search-filled",
	});
}

export default Component;
