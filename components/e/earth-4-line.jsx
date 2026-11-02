import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l66dffbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l66dffbfy"/>`,
		"fallback": "mingcute:earth-4-line",
	});
}

export default Component;
