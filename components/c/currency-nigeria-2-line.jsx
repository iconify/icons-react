import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2purxala.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2purxala"/>`,
		"fallback": "mingcute:currency-nigeria-2-line",
	});
}

export default Component;
