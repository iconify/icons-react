import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpz8kyb2w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpz8kyb2w"/>`,
		"fallback": "memory:alpha-x-fill",
	});
}

export default Component;
