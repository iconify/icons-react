import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upwo9zbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upwo9zbjt"/>`,
		"fallback": "bx:bxs-calendar-week",
	});
}

export default Component;
