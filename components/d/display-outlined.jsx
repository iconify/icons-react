import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j34g6udkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j34g6udkl"/>`,
		"fallback": "weui:display-outlined",
	});
}

export default Component;
