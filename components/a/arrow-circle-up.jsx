import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e46-ry4zz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e46-ry4zz"/>`,
		"fallback": "noviair-light:arrow-circle-up",
	});
}

export default Component;
