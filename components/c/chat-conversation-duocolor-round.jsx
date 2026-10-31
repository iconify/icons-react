import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iin6arb5t.css';
import '../../css/i/ixfd0uity.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iin6arb5t"/><path class="ixfd0uity"/></g>`,
		"fallback": "coolicons:chat-conversation-duocolor-round",
	});
}

export default Component;
