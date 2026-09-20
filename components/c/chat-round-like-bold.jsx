import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwx4n85mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwx4n85mf"/>`,
		"fallback": "solar:chat-round-like-bold",
	});
}

export default Component;
