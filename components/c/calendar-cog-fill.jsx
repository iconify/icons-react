import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icoyows6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icoyows6o"/>`,
		"fallback": "mingcute:calendar-cog-fill",
	});
}

export default Component;
