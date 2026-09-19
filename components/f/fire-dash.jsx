import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf1p5q8zl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf1p5q8zl"/>`,
		"fallback": "game-icons:fire-dash",
	});
}

export default Component;
