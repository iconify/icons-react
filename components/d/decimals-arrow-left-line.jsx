import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq3pbd0ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq3pbd0ce"/>`,
		"fallback": "mingcute:decimals-arrow-left-line",
	});
}

export default Component;
