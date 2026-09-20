import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg14t-wju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg14t-wju"/>`,
		"fallback": "mingcute:calendar-add-fill",
	});
}

export default Component;
