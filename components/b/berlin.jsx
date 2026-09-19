import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqmy5ybif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqmy5ybif"/>`,
		"fallback": "hugeicons:berlin",
	});
}

export default Component;
