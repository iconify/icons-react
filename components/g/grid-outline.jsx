import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6f47mbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6f47mbfd"/>`,
		"fallback": "eva:grid-outline",
	});
}

export default Component;
