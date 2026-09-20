import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqx6e0bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqx6e0bcd"/>`,
		"fallback": "mingcute:file-star-fill",
	});
}

export default Component;
