import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgxvx1b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgxvx1b8a"/>`,
		"fallback": "solar:chat-square-add-bold",
	});
}

export default Component;
