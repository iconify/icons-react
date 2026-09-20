import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pak4c7bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pak4c7bdi"/>`,
		"fallback": "tdesign:chat-bubble-history-filled",
	});
}

export default Component;
