import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_9n7s0do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_9n7s0do"/>`,
		"fallback": "mdi:handshake-outline",
	});
}

export default Component;
