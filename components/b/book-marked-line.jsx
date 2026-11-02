import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j661y24zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j661y24zt"/>`,
		"fallback": "mingcute:book-marked-line",
	});
}

export default Component;
