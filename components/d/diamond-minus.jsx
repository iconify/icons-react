import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y55cpqcln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y55cpqcln"/>`,
		"fallback": "hugeicons:diamond-minus",
	});
}

export default Component;
