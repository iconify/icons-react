import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7uw6-bjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7uw6-bjl"/>`,
		"fallback": "game-icons:abstract-054",
	});
}

export default Component;
