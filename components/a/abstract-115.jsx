import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t95d3yb2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t95d3yb2g"/>`,
		"fallback": "game-icons:abstract-115",
	});
}

export default Component;
