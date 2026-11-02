import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flenrabcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flenrabcf"/>`,
		"fallback": "mingcute:calendar-1-fill",
	});
}

export default Component;
