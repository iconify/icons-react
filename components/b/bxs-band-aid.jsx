import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y95ohhh1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y95ohhh1q"/>`,
		"fallback": "bx:bxs-band-aid",
	});
}

export default Component;
