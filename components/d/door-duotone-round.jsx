import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dc11fdhul.css';
import '../../css/q/qxyl_3bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dc11fdhul"/><path class="qxyl_3bju"/></g>`,
		"fallback": "coolicons:door-duotone-round",
	});
}

export default Component;
