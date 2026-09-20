import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5r3edbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5r3edbwz"/>`,
		"fallback": "streamline-sharp:bullet-list",
	});
}

export default Component;
