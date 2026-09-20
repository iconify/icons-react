import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0yx-r6qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0yx-r6qe"/>`,
		"fallback": "mingcute:curtain-fill",
	});
}

export default Component;
