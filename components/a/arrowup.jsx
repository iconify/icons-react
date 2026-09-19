import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz-xmkcja.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz-xmkcja"/>`,
		"fallback": "whh:arrowup",
	});
}

export default Component;
