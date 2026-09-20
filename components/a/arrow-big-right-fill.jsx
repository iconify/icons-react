import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy505gb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy505gb_q"/>`,
		"fallback": "keyline-icons:arrow-big-right-fill",
	});
}

export default Component;
