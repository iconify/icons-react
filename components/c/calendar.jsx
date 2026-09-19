import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q14fikbsi.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q14fikbsi"/>`,
		"fallback": "fa6-solid:calendar",
	});
}

export default Component;
