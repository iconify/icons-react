import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s5tyfnvkk.css';
import '../../css/a/agtdj4b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s5tyfnvkk"/><path class="agtdj4b1h"/></g>`,
		"fallback": "coolicons:chat-conversation-duotone-round",
	});
}

export default Component;
