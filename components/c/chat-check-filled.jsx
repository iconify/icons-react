import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sreo9ebug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sreo9ebug"/>`,
		"fallback": "reicon:chat-check-filled",
	});
}

export default Component;
