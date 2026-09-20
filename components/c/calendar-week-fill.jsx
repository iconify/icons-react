import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruyz_z9xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruyz_z9xb"/>`,
		"fallback": "mingcute:calendar-week-fill",
	});
}

export default Component;
