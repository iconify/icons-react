import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3u1jcbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3u1jcbox"/>`,
		"fallback": "mingcute:handshake-fill",
	});
}

export default Component;
