import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl98ubb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl98ubb5q"/>`,
		"fallback": "reicon:handshake-filled",
	});
}

export default Component;
