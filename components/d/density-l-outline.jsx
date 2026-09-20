import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr7da0tze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr7da0tze"/>`,
		"fallback": "lsicon:density-l-outline",
	});
}

export default Component;
