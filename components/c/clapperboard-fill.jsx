import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7mm-nbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7mm-nbpt"/>`,
		"fallback": "mingcute:clapperboard-fill",
	});
}

export default Component;
