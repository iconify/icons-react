import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se0r9bc9k.css';
import '../../css/g/gpjktbcrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se0r9bc9k"/><path clip-rule="evenodd" class="gpjktbcrx"/>`,
		"fallback": "streamline-ultimate:crypto-chat-mobile-phone-bold",
	});
}

export default Component;
