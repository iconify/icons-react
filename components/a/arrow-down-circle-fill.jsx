import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_0irbrkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_0irbrkt"/>`,
		"fallback": "mingcute:arrow-down-circle-fill",
	});
}

export default Component;
