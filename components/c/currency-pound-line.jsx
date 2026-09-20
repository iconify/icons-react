import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu55nd1hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu55nd1hx"/>`,
		"fallback": "mingcute:currency-pound-line",
	});
}

export default Component;
