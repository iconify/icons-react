import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/cba1_qbkr.css';
import '../../css/v/vkca7qppm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="cba1_qbkr"/><path class="vkca7qppm"/></g>`,
		"fallback": "flowbite:horizontal-lines-outline",
	});
}

export default Component;
