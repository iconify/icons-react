import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulvg8qbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulvg8qbmc"/>`,
		"fallback": "hugeicons:diff",
	});
}

export default Component;
