import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-3rr5b8k.css';
import '../../css/j/ja7wz_ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d-3rr5b8k"/><path class="ja7wz_ben"/></g>`,
		"fallback": "coolicons:chat-conversation-circle-duocolor-round",
	});
}

export default Component;
