import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hspua9b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hspua9b8x"/>`,
		"fallback": "coolicons:calendar-text-fill-round",
	});
}

export default Component;
