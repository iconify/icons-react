import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_ix5ia0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_ix5ia0l"/>`,
		"fallback": "mingcute:calendar-x-2-fill",
	});
}

export default Component;
