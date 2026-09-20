import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecwn0mb8b.css';
import '../../css/b/beq9-lbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecwn0mb8b"/><path class="beq9-lbqg"/>`,
		"fallback": "tdesign:chat-bubble-locked-filled",
	});
}

export default Component;
