import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev_cvrjhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev_cvrjhd"/>`,
		"fallback": "mingcute:camcorder-2-line",
	});
}

export default Component;
