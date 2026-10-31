import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sv4cljb-z.css';
import '../../css/e/en-mohuvb.css';
import '../../css/d/dgpnbnawx.css';
import '../../css/n/ngkbrebze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sv4cljb-z wm-shadow"/><path class="en-mohuvb wm-shadow"/><path class="dgpnbnawx"/><path class="ngkbrebze"/></g>`,
		"fallback": "withicons-brutal:flag",
	});
}

export default Component;
