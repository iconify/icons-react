import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1x3l2bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1x3l2bav"/>`,
		"fallback": "mingcute:beard-line",
	});
}

export default Component;
