import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt3-4rb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt3-4rb4z"/>`,
		"fallback": "circum:grid-4-2",
	});
}

export default Component;
