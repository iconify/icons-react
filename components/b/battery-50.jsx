import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onw2bx3kd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onw2bx3kd"/>`,
		"fallback": "game-icons:battery-50",
	});
}

export default Component;
