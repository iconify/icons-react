import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvp-l7bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvp-l7bil"/>`,
		"fallback": "majesticons:cup-line",
	});
}

export default Component;
