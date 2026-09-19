import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vog6-j50i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vog6-j50i"/>`,
		"fallback": "bxs:calendar-plus",
	});
}

export default Component;
