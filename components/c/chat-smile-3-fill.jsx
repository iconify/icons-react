import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvgsdedrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvgsdedrg"/>`,
		"fallback": "ri:chat-smile-3-fill",
	});
}

export default Component;
