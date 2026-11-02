import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7gx95x_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7gx95x_k"/>`,
		"fallback": "mingcute:broccoli-line",
	});
}

export default Component;
