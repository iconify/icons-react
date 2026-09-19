import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi62lyb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi62lyb4q"/>`,
		"fallback": "bxs:chevron-right-circle",
	});
}

export default Component;
