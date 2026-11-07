import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j59xwccww.css';
import '../../css/h/hmxnmsbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j59xwccww"/><path class="hmxnmsbhy"/>`,
		"fallback": "solar:chat-round-off-outline",
	});
}

export default Component;
