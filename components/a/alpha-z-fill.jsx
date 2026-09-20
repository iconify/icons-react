import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0cpzlb9d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0cpzlb9d"/>`,
		"fallback": "memory:alpha-z-fill",
	});
}

export default Component;
