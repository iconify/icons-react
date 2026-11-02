import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jakbai47o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jakbai47o"/>`,
		"fallback": "mingcute:danmaku-on-fill",
	});
}

export default Component;
