import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_o8fy9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_o8fy9g"/>`,
		"fallback": "game-icons:chained-heart",
	});
}

export default Component;
