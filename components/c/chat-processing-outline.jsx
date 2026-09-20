import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqp4tdvik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqp4tdvik"/>`,
		"fallback": "mdi:chat-processing-outline",
	});
}

export default Component;
