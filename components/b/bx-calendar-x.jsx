import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znybzcczr.css';
import '../../css/d/dfc4wub2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znybzcczr"/><path class="dfc4wub2q"/>`,
		"fallback": "bx:bx-calendar-x",
	});
}

export default Component;
