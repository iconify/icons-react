import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yabcsy1tg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yabcsy1tg"/>`,
		"fallback": "catppuccin:firebase",
	});
}

export default Component;
