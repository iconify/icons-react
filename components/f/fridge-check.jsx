import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wly1u2umf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wly1u2umf"/>`,
		"fallback": "noviair:fridge-check",
	});
}

export default Component;
