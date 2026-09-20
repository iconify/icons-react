import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/q/qnpvard1a.css';
import '../../css/w/wcs8p4ttm.css';
import '../../css/r/r8rap4b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="qnpvard1a"/><path class="wcs8p4ttm"/><path class="r8rap4b0g"/></g>`,
		"fallback": "solar:chat-round-call-line-duotone",
	});
}

export default Component;
