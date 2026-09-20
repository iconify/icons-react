import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rckno4b5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rckno4b5q"/>`,
		"fallback": "subway:cloud",
	});
}

export default Component;
