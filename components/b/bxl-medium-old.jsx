import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukonh3j0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukonh3j0e"/>`,
		"fallback": "bx:bxl-medium-old",
	});
}

export default Component;
