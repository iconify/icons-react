import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4oi2s2oe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4oi2s2oe"/>`,
		"fallback": "memory:arrow-right-bold",
	});
}

export default Component;
