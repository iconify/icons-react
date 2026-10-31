import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvslo-b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvslo-b5m"/>`,
		"fallback": "coolicons:chat-circle-plus-round",
	});
}

export default Component;
