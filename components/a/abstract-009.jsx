import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9ttx_b-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9ttx_b-i"/>`,
		"fallback": "game-icons:abstract-009",
	});
}

export default Component;
