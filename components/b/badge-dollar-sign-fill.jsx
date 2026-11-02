import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx-6osbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx-6osbjp"/>`,
		"fallback": "mingcute:badge-dollar-sign-fill",
	});
}

export default Component;
