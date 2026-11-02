import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byx32bbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byx32bbup"/>`,
		"fallback": "mingcute:calendar-arrow-up-line",
	});
}

export default Component;
