import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpp_4zwkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpp_4zwkm"/>`,
		"fallback": "ri:chat-quote-fill",
	});
}

export default Component;
