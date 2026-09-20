import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejryytb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejryytb4a"/>`,
		"fallback": "solar:chat-square-call-outline",
	});
}

export default Component;
