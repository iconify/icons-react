import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8k5alboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8k5alboq"/>`,
		"fallback": "mingcute:bookmark-remove-line",
	});
}

export default Component;
