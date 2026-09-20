import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5fy2vrey.css';
import '../../css/y/y0j4tbs9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5fy2vrey"/><path class="y0j4tbs9z"/></g>`,
		"fallback": "lets-icons:dimond-alt-duotone",
	});
}

export default Component;
