import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0c2d3bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0c2d3bvm"/>`,
		"fallback": "fa6-solid:cable-car",
	});
}

export default Component;
