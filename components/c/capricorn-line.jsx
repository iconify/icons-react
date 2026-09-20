import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0mdmyy9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0mdmyy9n"/>`,
		"fallback": "mingcute:capricorn-line",
	});
}

export default Component;
