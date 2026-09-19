import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddgx_yb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddgx_yb3l"/>`,
		"fallback": "hugeicons:calendar-x2",
	});
}

export default Component;
