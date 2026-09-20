import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_w4j6r0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_w4j6r0z"/>`,
		"fallback": "mingcute:floating-dust-line",
	});
}

export default Component;
