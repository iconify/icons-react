import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0xrnioja.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0xrnioja"/>`,
		"fallback": "memory:alpha-i-fill",
	});
}

export default Component;
