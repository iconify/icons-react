import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylqwv4a4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylqwv4a4h"/>`,
		"fallback": "iconaut:arrow-down-left-solid",
	});
}

export default Component;
