import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0qi11b_s.css';
import '../../css/o/o3ondoz6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y0qi11b_s"/><circle class="o3ondoz6y"/></g>`,
		"fallback": "reicon:dark-light",
	});
}

export default Component;
