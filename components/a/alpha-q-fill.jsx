import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgwmh8fot.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgwmh8fot"/>`,
		"fallback": "memory:alpha-q-fill",
	});
}

export default Component;
