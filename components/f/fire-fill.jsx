import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct_bdfr0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct_bdfr0m"/>`,
		"fallback": "ri:fire-fill",
	});
}

export default Component;
