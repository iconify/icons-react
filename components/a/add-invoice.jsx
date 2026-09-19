import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb8vuhygn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb8vuhygn"/>`,
		"fallback": "hugeicons:add-invoice",
	});
}

export default Component;
