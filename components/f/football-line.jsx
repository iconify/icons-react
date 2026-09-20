import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xta_c3bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xta_c3bhy"/>`,
		"fallback": "ri:football-line",
	});
}

export default Component;
