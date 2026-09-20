import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpqfbubif.css';
import '../../css/m/m4dq5vbyd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpqfbubif"/><path class="m4dq5vbyd"/>`,
		"fallback": "streamline-pixel:chat-email",
	});
}

export default Component;
