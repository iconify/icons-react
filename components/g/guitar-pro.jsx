import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5w6t-_yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5w6t-_yd"/>`,
		"fallback": "thesvg:guitar-pro",
	});
}

export default Component;
