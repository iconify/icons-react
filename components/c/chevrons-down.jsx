import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz8469k2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz8469k2u"/>`,
		"fallback": "noviair-light:chevrons-down",
	});
}

export default Component;
