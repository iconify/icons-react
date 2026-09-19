import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3y4vm94d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3y4vm94d"/>`,
		"fallback": "boxicons:backpack-star-filled",
	});
}

export default Component;
