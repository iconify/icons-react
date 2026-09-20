import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3bww6big.css';

const viewBox = {"width":24,"height":24,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3bww6big"/>`,
		"fallback": "jam:gamepad-f",
	});
}

export default Component;
