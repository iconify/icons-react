import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydvq6bbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydvq6bbwp"/>`,
		"fallback": "bx:bxs-bookmark-heart",
	});
}

export default Component;
