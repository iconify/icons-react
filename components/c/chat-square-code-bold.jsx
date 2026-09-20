import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxj5tzieu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxj5tzieu"/>`,
		"fallback": "solar:chat-square-code-bold",
	});
}

export default Component;
