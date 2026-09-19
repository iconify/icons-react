import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xas180buj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xas180buj"/>`,
		"fallback": "game-icons:frozen-block",
	});
}

export default Component;
