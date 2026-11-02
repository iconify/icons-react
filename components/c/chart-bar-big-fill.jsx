import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m11i52b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m11i52b0i"/>`,
		"fallback": "mingcute:chart-bar-big-fill",
	});
}

export default Component;
