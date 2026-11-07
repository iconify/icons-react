import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b9hwg5m9c.css';
import '../../css/q/q7u_r02fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b9hwg5m9c"/><path class="q7u_r02fy"/></g>`,
		"fallback": "solar:call-chat-line-duotone",
	});
}

export default Component;
