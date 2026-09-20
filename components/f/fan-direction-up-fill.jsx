import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt09b1byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt09b1byx"/>`,
		"fallback": "mingcute:fan-direction-up-fill",
	});
}

export default Component;
