import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvg9x3bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvg9x3bmc"/>`,
		"fallback": "mingcute:ferris-wheel-line",
	});
}

export default Component;
