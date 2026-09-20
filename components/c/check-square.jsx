import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ux82p4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ux82p4z"/>`,
		"fallback": "uis:check-square",
	});
}

export default Component;
