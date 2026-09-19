import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ini-ntv5q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ini-ntv5q"/>`,
		"fallback": "fa7-brands:bluetooth-b",
	});
}

export default Component;
