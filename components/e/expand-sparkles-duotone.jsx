import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohjgf69hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohjgf69hh primary"/>`,
		"fallback": "iconaut:expand-sparkles-duotone",
	});
}

export default Component;
