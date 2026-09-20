import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-25xw8du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-25xw8du"/>`,
		"fallback": "mingcute:history-fill",
	});
}

export default Component;
