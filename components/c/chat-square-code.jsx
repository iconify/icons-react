import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruu_5mhlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ruu_5mhlg"/>`,
		"fallback": "reicon:chat-square-code",
	});
}

export default Component;
