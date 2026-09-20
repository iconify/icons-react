import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjo88abed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjo88abed"/>`,
		"fallback": "mdi:fridge-off-outline",
	});
}

export default Component;
