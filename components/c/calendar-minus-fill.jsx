import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgjy2_xog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgjy2_xog"/>`,
		"fallback": "mingcute:calendar-minus-fill",
	});
}

export default Component;
