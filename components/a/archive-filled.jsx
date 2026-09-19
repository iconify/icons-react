import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl_7r6bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl_7r6bxy"/>`,
		"fallback": "boxicons:archive-filled",
	});
}

export default Component;
