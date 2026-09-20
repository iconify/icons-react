import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htxsu-e7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htxsu-e7h"/>`,
		"fallback": "mingcute:calendar-2-line",
	});
}

export default Component;
