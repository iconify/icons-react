import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-0ch2ja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-0ch2ja"/>`,
		"fallback": "catppuccin:biome",
	});
}

export default Component;
