import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lny8fyb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lny8fyb8r"/>`,
		"fallback": "ci:chevron-duo-up",
	});
}

export default Component;
