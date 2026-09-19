import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0hf1wm2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0hf1wm2e"/>`,
		"fallback": "ci:filter-off",
	});
}

export default Component;
