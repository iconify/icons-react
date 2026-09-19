import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h002_qdfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h002_qdfn"/>`,
		"fallback": "heroicons-outline:calendar-days",
	});
}

export default Component;
