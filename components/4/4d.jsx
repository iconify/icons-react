import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp0s8xg3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp0s8xg3q"/>`,
		"fallback": "thesvg-color:4d",
	});
}

export default Component;
