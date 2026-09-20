import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2yh6lbjz.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2yh6lbjz"/>`,
		"fallback": "memory:alpha-u",
	});
}

export default Component;
