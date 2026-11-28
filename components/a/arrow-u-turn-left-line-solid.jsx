import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tud7q3bev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tud7q3bev"/>`,
		"fallback": "iconaut:arrow-u-turn-left-line-solid",
	});
}

export default Component;
