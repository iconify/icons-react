import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvf0hfb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvf0hfb8q"/>`,
		"fallback": "uil:align-center-alt",
	});
}

export default Component;
