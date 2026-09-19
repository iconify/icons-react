import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x00tdo4cv.css';
import '../../css/o/otep6cc9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x00tdo4cv"/><path class="otep6cc9x"/></g>`,
		"fallback": "at-icons:bullseye",
	});
}

export default Component;
