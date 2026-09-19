import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2d1b9c7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2d1b9c7s"/>`,
		"fallback": "hugeicons:align-vertical-distribute-start",
	});
}

export default Component;
