import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa2d_wzze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa2d_wzze"/>`,
		"fallback": "simple-icons:aew",
	});
}

export default Component;
