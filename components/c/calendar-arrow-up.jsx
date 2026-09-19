import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kavk_2ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kavk_2ber"/>`,
		"fallback": "iconoir:calendar-arrow-up",
	});
}

export default Component;
