import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrgryxb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrgryxb4s"/>`,
		"fallback": "coolicons:calendar-minus-corner-fill-round",
	});
}

export default Component;
