import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulnrl9bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulnrl9bri"/>`,
		"fallback": "mingcute:history-anticlockwise-fill",
	});
}

export default Component;
