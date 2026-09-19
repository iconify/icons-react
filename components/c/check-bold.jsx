import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm4hurb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm4hurb0r"/>`,
		"fallback": "ci:check-bold",
	});
}

export default Component;
