import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfgmwlw-y.css';
import '../../css/w/wup-x7b1q.css';
import '../../css/e/endkth4bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cfgmwlw-y"/><path class="wup-x7b1q"/><path class="endkth4bt"/></g>`,
		"fallback": "lets-icons:arhive-load-duotone-line",
	});
}

export default Component;
