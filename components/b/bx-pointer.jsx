import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt6ij0b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt6ij0b3x"/>`,
		"fallback": "bx:bx-pointer",
	});
}

export default Component;
