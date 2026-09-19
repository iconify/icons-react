import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3q4fbcar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3q4fbcar"/>`,
		"fallback": "iconamoon:arrow-down-3-square",
	});
}

export default Component;
