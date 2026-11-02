import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uavavh43o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uavavh43o"/>`,
		"fallback": "mingcute:counter-fill",
	});
}

export default Component;
