import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvt3dewrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bvt3dewrc"/>`,
		"fallback": "reicon:chat-round-check-filled",
	});
}

export default Component;
