import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyj0pr4wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyj0pr4wr"/>`,
		"fallback": "mingcute:diamond-2-line",
	});
}

export default Component;
