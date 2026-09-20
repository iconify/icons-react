import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neq9wz14q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neq9wz14q"/>`,
		"fallback": "thesvg-color:instructure",
	});
}

export default Component;
