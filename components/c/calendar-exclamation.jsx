import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5y3i_byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5y3i_byi"/>`,
		"fallback": "bxs:calendar-exclamation",
	});
}

export default Component;
