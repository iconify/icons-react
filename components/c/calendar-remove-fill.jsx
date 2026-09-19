import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnd-vrqvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jnd-vrqvr"/>`,
		"fallback": "iconamoon:calendar-remove-fill",
	});
}

export default Component;
