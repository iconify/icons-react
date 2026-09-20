import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j34e_4brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j34e_4brr"/>`,
		"fallback": "streamline-ultimate:golf-hole-bold",
	});
}

export default Component;
