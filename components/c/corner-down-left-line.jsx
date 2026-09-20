import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilj8trt6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilj8trt6j"/>`,
		"fallback": "mingcute:corner-down-left-line",
	});
}

export default Component;
