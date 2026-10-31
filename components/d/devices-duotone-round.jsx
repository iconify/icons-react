import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e577hl5-i.css';
import '../../css/j/jxb-x984y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e577hl5-i"/><path class="jxb-x984y"/></g>`,
		"fallback": "coolicons:devices-duotone-round",
	});
}

export default Component;
