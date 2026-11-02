import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2v6t19zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2v6t19zu"/>`,
		"fallback": "mingcute:basket-2-line",
	});
}

export default Component;
