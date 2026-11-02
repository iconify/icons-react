import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkygv8d5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkygv8d5z"/>`,
		"fallback": "mingcute:diagonal-fill",
	});
}

export default Component;
