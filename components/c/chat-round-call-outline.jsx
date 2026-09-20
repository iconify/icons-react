import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s42gq2v8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s42gq2v8m"/>`,
		"fallback": "solar:chat-round-call-outline",
	});
}

export default Component;
