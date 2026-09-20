import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt4fctb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pt4fctb7j"/>`,
		"fallback": "lets-icons:chat-alt-3-fill",
	});
}

export default Component;
