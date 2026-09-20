import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kso4zxb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kso4zxb6q"/>`,
		"fallback": "mingcute:add-square-fill",
	});
}

export default Component;
