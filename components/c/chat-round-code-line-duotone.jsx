import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/w/wg8azcbhn.css';
import '../../css/h/hyjgutf1e.css';
import '../../css/r/rgyx7gbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="wg8azcbhn"/><path class="hyjgutf1e"/><path class="rgyx7gbde"/></g>`,
		"fallback": "solar:chat-round-code-line-duotone",
	});
}

export default Component;
