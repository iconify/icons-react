import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enzq9n-th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enzq9n-th"/>`,
		"fallback": "mingcute:cross-2-fill",
	});
}

export default Component;
