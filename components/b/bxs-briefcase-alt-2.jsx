import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-6lat49e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-6lat49e"/>`,
		"fallback": "bx:bxs-briefcase-alt-2",
	});
}

export default Component;
