import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/v/vzg32tqda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bym8zsb_r"/><path class="vzg32tqda"/></g>`,
		"fallback": "solar:chat-round-line-duotone",
	});
}

export default Component;
