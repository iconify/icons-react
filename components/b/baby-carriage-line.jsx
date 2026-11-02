import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ton41i5am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ton41i5am"/>`,
		"fallback": "mingcute:baby-carriage-line",
	});
}

export default Component;
