import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e82tqkr_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e82tqkr_m"/>`,
		"fallback": "mdi:border-style",
	});
}

export default Component;
