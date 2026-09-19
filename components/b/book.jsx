import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/edbboo-hy.css';
import '../../css/q/q4hhm4b9u.css';
import '../../css/m/mfc7nxp-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="edbboo-hy"/><path class="q4hhm4b9u"/><path class="mfc7nxp-y"/></g>`,
		"fallback": "iconoir:book",
	});
}

export default Component;
