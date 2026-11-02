import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_h60ab3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_h60ab3l"/>`,
		"fallback": "mingcute:dribbble-fill",
	});
}

export default Component;
