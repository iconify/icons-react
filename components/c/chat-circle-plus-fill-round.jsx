import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzag8xbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzag8xbmr"/>`,
		"fallback": "coolicons:chat-circle-plus-fill-round",
	});
}

export default Component;
