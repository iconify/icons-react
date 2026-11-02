import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltb8g75pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltb8g75pj"/>`,
		"fallback": "mingcute:globe-2-line",
	});
}

export default Component;
