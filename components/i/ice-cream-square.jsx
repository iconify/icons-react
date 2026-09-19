import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1p3sh9lx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1p3sh9lx"/>`,
		"fallback": "ep:ice-cream-square",
	});
}

export default Component;
