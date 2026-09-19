import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxfil_d2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxfil_d2d"/>`,
		"fallback": "heroicons-outline:chat-alt",
	});
}

export default Component;
