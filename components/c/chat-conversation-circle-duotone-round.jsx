import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dlvde0_jm.css';
import '../../css/a/a0zmi758o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dlvde0_jm"/><path class="a0zmi758o"/></g>`,
		"fallback": "coolicons:chat-conversation-circle-duotone-round",
	});
}

export default Component;
