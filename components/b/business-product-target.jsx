import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuq6hpc1o.css';
import '../../css/f/filz8l4-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuq6hpc1o"/><path class="filz8l4-x"/>`,
		"fallback": "streamline-pixel:business-product-target",
	});
}

export default Component;
