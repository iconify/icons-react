import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozar6vojc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozar6vojc"/>`,
		"fallback": "mingcute:camcorder-2-fill",
	});
}

export default Component;
