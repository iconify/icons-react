import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbyvz2pfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbyvz2pfm"/>`,
		"fallback": "iconoir:chat-bubble-empty-solid",
	});
}

export default Component;
