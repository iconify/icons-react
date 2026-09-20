import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcae4gsqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcae4gsqb"/>`,
		"fallback": "mdi:head-question",
	});
}

export default Component;
