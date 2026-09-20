import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ievw0_bxs.css';
import '../../css/x/x5oypsb1r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ievw0_bxs"/><path class="x5oypsb1r"/>`,
		"fallback": "openmoji:anticlockwise-triangle-headed-top-u-shaped-arrow",
	});
}

export default Component;
