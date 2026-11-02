import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lasmuzh_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lasmuzh_z"/>`,
		"fallback": "mingcute:camcorder-3-line",
	});
}

export default Component;
