import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_oibb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_oibb1y"/>`,
		"fallback": "mingcute:camcorder-line",
	});
}

export default Component;
