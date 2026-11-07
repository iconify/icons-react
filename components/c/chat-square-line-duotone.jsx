import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgmb80h6u.css';
import '../../css/y/ya1metbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lgmb80h6u"/><path class="ya1metbqz"/></g>`,
		"fallback": "solar:chat-square-line-duotone",
	});
}

export default Component;
