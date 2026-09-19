import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu5vlxh4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu5vlxh4l"/>`,
		"fallback": "boxicons:donate-heart-filled",
	});
}

export default Component;
