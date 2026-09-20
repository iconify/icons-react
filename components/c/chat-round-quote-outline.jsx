import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j9gyou4rl.css';
import '../../css/s/sxgjd-btc.css';
import '../../css/d/dr1qdzm2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j9gyou4rl"/><path class="sxgjd-btc"/><path class="dr1qdzm2w"/></g>`,
		"fallback": "solar:chat-round-quote-outline",
	});
}

export default Component;
