import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xvb_5qbcd.css';
import '../../css/m/mjvmmlewr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xvb_5qbcd"/><path class="mjvmmlewr"/></g>`,
		"fallback": "at-icons:floor-plane",
	});
}

export default Component;
