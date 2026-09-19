import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw4l3nbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw4l3nbae"/>`,
		"fallback": "bx:bxs-music",
	});
}

export default Component;
