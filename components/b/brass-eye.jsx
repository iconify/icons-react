import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baes3_9xt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baes3_9xt"/>`,
		"fallback": "game-icons:brass-eye",
	});
}

export default Component;
