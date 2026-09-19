import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz0__bbtl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz0__bbtl"/>`,
		"fallback": "game-icons:abstract-010",
	});
}

export default Component;
