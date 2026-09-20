import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-g6nkb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-g6nkb8l"/>`,
		"fallback": "mynaui:bitcoin",
	});
}

export default Component;
