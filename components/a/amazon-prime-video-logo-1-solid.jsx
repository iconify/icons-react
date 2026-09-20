import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykt_9484h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykt_9484h"/>`,
		"fallback": "streamline-logos:amazon-prime-video-logo-1-solid",
	});
}

export default Component;
