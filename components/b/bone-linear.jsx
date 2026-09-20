import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2-x5cc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2-x5cc0s"/>`,
		"fallback": "solar:bone-linear",
	});
}

export default Component;
