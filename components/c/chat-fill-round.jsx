import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojkk-2kby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojkk-2kby"/>`,
		"fallback": "coolicons:chat-fill-round",
	});
}

export default Component;
