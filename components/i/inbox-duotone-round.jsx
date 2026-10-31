import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-83y7b1x.css';
import '../../css/u/ux78ty71o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-83y7b1x"/><path class="ux78ty71o"/></g>`,
		"fallback": "coolicons:inbox-duotone-round",
	});
}

export default Component;
