import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9l2s-gon.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9l2s-gon"/>`,
		"fallback": "streamline-plump:help-chat-1-solid",
	});
}

export default Component;
