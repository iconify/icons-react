import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxl1c6bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxl1c6bxb"/>`,
		"fallback": "mingcute:bell-electric-line",
	});
}

export default Component;
