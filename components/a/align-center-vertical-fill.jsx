import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz-vx1bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz-vx1bre"/>`,
		"fallback": "mingcute:align-center-vertical-fill",
	});
}

export default Component;
