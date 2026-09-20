import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-w_9x0ol.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-w_9x0ol"/>`,
		"fallback": "radix-icons:aspect-ratio",
	});
}

export default Component;
