import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tol6492tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tol6492tp"/>`,
		"fallback": "mdi:cash-off",
	});
}

export default Component;
