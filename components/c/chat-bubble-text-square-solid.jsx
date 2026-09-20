import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaiqco-dz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gaiqco-dz"/>`,
		"fallback": "streamline-plump:chat-bubble-text-square-solid",
	});
}

export default Component;
