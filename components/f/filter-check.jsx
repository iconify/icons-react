import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnx8k-b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnx8k-b0l"/>`,
		"fallback": "noviair:filter-check",
	});
}

export default Component;
