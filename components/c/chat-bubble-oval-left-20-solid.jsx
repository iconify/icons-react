import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg5t6pbfg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lg5t6pbfg"/>`,
		"fallback": "heroicons:chat-bubble-oval-left-20-solid",
	});
}

export default Component;
