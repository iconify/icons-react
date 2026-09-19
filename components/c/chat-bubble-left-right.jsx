import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqedi-bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqedi-bxo"/>`,
		"fallback": "heroicons:chat-bubble-left-right",
	});
}

export default Component;
