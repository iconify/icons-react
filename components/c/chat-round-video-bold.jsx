import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjqu2ujmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjqu2ujmc"/>`,
		"fallback": "solar:chat-round-video-bold",
	});
}

export default Component;
