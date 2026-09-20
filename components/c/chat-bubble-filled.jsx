import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6h7dht2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6h7dht2d"/>`,
		"fallback": "tdesign:chat-bubble-filled",
	});
}

export default Component;
