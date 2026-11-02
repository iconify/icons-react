import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3w_j8_cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3w_j8_cx"/>`,
		"fallback": "mingcute:inbox-line",
	});
}

export default Component;
