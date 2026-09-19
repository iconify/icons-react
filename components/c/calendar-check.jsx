import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p69oc7ijo.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p69oc7ijo"/>`,
		"fallback": "zmdi:calendar-check",
	});
}

export default Component;
