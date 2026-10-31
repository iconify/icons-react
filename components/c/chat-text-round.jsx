import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl8z51bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl8z51bno"/>`,
		"fallback": "coolicons:chat-text-round",
	});
}

export default Component;
