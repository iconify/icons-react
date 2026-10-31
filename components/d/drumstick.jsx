import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n24cxcp_g.css';
import '../../css/j/jhcy9nbco.css';
import '../../css/p/px6tk1b_d.css';
import '../../css/s/s8gwjebyh.css';
import '../../css/w/wgawraqqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n24cxcp_g wm-shadow"/><path class="jhcy9nbco wm-shadow"/><path class="px6tk1b_d"/><path class="s8gwjebyh"/><path class="wgawraqqm"/></g>`,
		"fallback": "withicons-brutal:drumstick",
	});
}

export default Component;
