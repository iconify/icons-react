import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp254zi-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bp254zi-s"/>`,
		"fallback": "griddy-icons:chat-filled",
	});
}

export default Component;
