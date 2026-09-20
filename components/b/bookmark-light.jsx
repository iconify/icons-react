import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybsln6b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybsln6b5e"/>`,
		"fallback": "lets-icons:bookmark-light",
	});
}

export default Component;
