import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erx1m70kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erx1m70kt"/>`,
		"fallback": "iconoir:cloud",
	});
}

export default Component;
