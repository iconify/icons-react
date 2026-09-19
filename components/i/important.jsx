import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnylsg0-q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnylsg0-q"/>`,
		"fallback": "fluent-mdl2:important",
	});
}

export default Component;
