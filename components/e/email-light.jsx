import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otz50ccal.css';
import '../../css/q/q2sxalbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otz50ccal"/><path class="q2sxalbxc"/></g>`,
		"fallback": "iconamoon:email-light",
	});
}

export default Component;
