import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i37pyt.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i37pyt"/>`,
		"fallback": "line-md:chat-bubble-twotone",
	});
}

export default Component;
