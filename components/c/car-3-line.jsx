import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v823m0bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v823m0bwf"/>`,
		"fallback": "mingcute:car-3-line",
	});
}

export default Component;
