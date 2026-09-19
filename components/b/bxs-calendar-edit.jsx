import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpvbe-bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpvbe-bnh"/>`,
		"fallback": "bx:bxs-calendar-edit",
	});
}

export default Component;
