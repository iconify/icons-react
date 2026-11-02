import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7-5x6g7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7-5x6g7q"/>`,
		"fallback": "mingcute:heart-minus-fill",
	});
}

export default Component;
