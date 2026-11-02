import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r88b0ccfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r88b0ccfb"/>`,
		"fallback": "mingcute:dashboard-3-line",
	});
}

export default Component;
