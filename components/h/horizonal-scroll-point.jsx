import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy3anfbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy3anfbvn"/>`,
		"fallback": "hugeicons:horizonal-scroll-point",
	});
}

export default Component;
