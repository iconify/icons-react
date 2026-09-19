import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff-4-q9jj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff-4-q9jj"/>`,
		"fallback": "game-icons:cupidon-arrow",
	});
}

export default Component;
