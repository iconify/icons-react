import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6v956x8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6v956x8i"/>`,
		"fallback": "coolicons:chat-circle-bulk-round",
	});
}

export default Component;
