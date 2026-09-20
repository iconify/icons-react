import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te17cbcvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te17cbcvh"/>`,
		"fallback": "mingcute:arow-to-down-line",
	});
}

export default Component;
