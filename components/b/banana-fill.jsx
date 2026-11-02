import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hczh8rbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hczh8rbws"/>`,
		"fallback": "mingcute:banana-fill",
	});
}

export default Component;
