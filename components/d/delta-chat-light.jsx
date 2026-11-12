import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyr5q_bpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyr5q_bpy"/>`,
		"fallback": "selfhst:delta-chat-light",
	});
}

export default Component;
