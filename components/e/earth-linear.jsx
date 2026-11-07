import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y-ioddvys.css';
import '../../css/r/rooviwj4w.css';
import '../../css/k/k0vnsw9yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y-ioddvys"/><path class="rooviwj4w"/><path class="k0vnsw9yf"/></g>`,
		"fallback": "solar:earth-linear",
	});
}

export default Component;
