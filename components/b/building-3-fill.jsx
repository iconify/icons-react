import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw9awtb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dw9awtb8n"/>`,
		"fallback": "mingcute:building-3-fill",
	});
}

export default Component;
