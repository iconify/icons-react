import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j224f_kyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j224f_kyc"/>`,
		"fallback": "tdesign:chat-poll-filled",
	});
}

export default Component;
