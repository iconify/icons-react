import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tif8-1b4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tif8-1b4t"/>`,
		"fallback": "carbon:http",
	});
}

export default Component;
