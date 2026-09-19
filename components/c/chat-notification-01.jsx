import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nn10_hvke.css';
import '../../css/n/n93c3rbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nn10_hvke"/><path class="n93c3rbwg"/></g>`,
		"fallback": "hugeicons:chat-notification-01",
	});
}

export default Component;
