import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9f7cs6wj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9f7cs6wj"/>`,
		"fallback": "memory:alpha-k-fill",
	});
}

export default Component;
