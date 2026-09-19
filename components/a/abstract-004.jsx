import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2eunbli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2eunbli"/>`,
		"fallback": "game-icons:abstract-004",
	});
}

export default Component;
