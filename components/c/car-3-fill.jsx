import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9v2a47yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9v2a47yn"/>`,
		"fallback": "mingcute:car-3-fill",
	});
}

export default Component;
