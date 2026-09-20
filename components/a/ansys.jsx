import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3f_xcb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3f_xcb7q"/>`,
		"fallback": "thesvg-color:ansys",
	});
}

export default Component;
