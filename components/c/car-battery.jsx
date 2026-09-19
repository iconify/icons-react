import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m599ys8mi.css';
import '../../css/m/mgsi99bfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m599ys8mi"/><path class="mgsi99bfb"/>`,
		"fallback": "boxicons:car-battery",
	});
}

export default Component;
