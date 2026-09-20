import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6805ccbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6805ccbi"/>`,
		"fallback": "solar:chat-round-video-outline",
	});
}

export default Component;
