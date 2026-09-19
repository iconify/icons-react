import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg6kdcc7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg6kdcc7q"/>`,
		"fallback": "famicons:bag-handle",
	});
}

export default Component;
