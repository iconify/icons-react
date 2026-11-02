import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynf_x9b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynf_x9b6q"/>`,
		"fallback": "mingcute:arrow-up-line",
	});
}

export default Component;
