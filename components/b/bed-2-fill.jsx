import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az9ogk10m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az9ogk10m"/>`,
		"fallback": "mingcute:bed-2-fill",
	});
}

export default Component;
