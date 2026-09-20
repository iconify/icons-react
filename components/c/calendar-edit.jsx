import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwur3-bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwur3-bfz"/>`,
		"fallback": "mdi:calendar-edit",
	});
}

export default Component;
