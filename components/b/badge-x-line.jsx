import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv55x9vmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv55x9vmh"/>`,
		"fallback": "mingcute:badge-x-line",
	});
}

export default Component;
