import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htwarde1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htwarde1y"/>`,
		"fallback": "solar:chat-round-linear",
	});
}

export default Component;
