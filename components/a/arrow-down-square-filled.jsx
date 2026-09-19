import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w41mwubps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w41mwubps"/>`,
		"fallback": "boxicons:arrow-down-square-filled",
	});
}

export default Component;
