import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_l8gwbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_l8gwbkb"/>`,
		"fallback": "ri:ancient-gate-line",
	});
}

export default Component;
