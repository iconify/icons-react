import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amqjltbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amqjltbzh"/>`,
		"fallback": "griddy-icons:chat-circle-info",
	});
}

export default Component;
