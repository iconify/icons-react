import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_3_c0b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_3_c0b-w"/>`,
		"fallback": "griddy-icons:chat-circle-text",
	});
}

export default Component;
