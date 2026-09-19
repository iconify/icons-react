import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ugrlbnbrf.css';
import '../../css/q/qdt7c407j.css';
import '../../css/l/lsl9z7beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ugrlbnbrf"/><path class="qdt7c407j"/><path class="lsl9z7beq"/></g>`,
		"fallback": "hugeicons:chat-delay-01",
	});
}

export default Component;
