import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02g9eb8s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n02g9eb8s"/>`,
		"fallback": "streamline:chat-bubble-text-square-remix",
	});
}

export default Component;
