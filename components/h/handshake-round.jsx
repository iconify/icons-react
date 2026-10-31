import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eekql3xep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eekql3xep"/>`,
		"fallback": "coolicons:handshake-round",
	});
}

export default Component;
