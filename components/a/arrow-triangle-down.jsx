import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxjd3r6wm.css';
import '../../css/m/m20e9ub1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uxjd3r6wm"/><path class="m20e9ub1d"/></g>`,
		"fallback": "tdesign:arrow-triangle-down",
	});
}

export default Component;
