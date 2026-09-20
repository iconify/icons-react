import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbb582b_y.css';
import '../../css/o/onr57qb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbb582b_y"/><path class="onr57qb4e"/>`,
		"fallback": "selfhst:bracket-dark",
	});
}

export default Component;
