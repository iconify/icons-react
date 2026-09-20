import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxk1d8bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxk1d8bpa"/>`,
		"fallback": "mynaui:confetti-solid",
	});
}

export default Component;
