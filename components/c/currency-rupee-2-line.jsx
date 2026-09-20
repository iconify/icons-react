import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv405_04e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv405_04e"/>`,
		"fallback": "mingcute:currency-rupee-2-line",
	});
}

export default Component;
