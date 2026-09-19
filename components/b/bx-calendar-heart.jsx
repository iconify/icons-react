import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7c4zjbcd.css';
import '../../css/d/dfc4wub2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7c4zjbcd"/><path class="dfc4wub2q"/>`,
		"fallback": "bx:bx-calendar-heart",
	});
}

export default Component;
