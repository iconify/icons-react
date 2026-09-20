import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzty0rkrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzty0rkrj"/>`,
		"fallback": "lets-icons:chat-alt-fill",
	});
}

export default Component;
