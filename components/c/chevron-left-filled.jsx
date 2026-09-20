import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo9ts0bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo9ts0bej"/>`,
		"fallback": "reicon:chevron-left-filled",
	});
}

export default Component;
