import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo92zvlfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo92zvlfr"/>`,
		"fallback": "coolicons:chat-close-fill-round",
	});
}

export default Component;
