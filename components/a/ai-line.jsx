import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_j775vwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_j775vwn"/>`,
		"fallback": "mingcute:ai-line",
	});
}

export default Component;
