import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e32ell92q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e32ell92q"/>`,
		"fallback": "keyline-icons:earbuds-fill",
	});
}

export default Component;
