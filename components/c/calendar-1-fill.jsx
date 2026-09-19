import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9uy8gbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9uy8gbnj"/>`,
		"fallback": "iconamoon:calendar-1-fill",
	});
}

export default Component;
