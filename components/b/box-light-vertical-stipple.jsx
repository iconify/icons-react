import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctgdt-6yh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctgdt-6yh"/>`,
		"fallback": "memory:box-light-vertical-stipple",
	});
}

export default Component;
