import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-v4rgbdl.css';
import '../../css/u/u00ey8bps.css';
import '../../css/r/ribhzvbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-v4rgbdl"/><circle class="u00ey8bps"/><path class="ribhzvbcl"/></g>`,
		"fallback": "solar:inbox-unread-line-duotone",
	});
}

export default Component;
