import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxivxha2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxivxha2t"/>`,
		"fallback": "energy-icons:carbon-footprint-20-bold",
	});
}

export default Component;
