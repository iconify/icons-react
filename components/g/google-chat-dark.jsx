import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xul7zyimb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xul7zyimb"/>`,
		"fallback": "selfhst:google-chat-dark",
	});
}

export default Component;
