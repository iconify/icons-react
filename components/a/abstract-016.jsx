import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtm7_qb2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtm7_qb2e"/>`,
		"fallback": "game-icons:abstract-016",
	});
}

export default Component;
