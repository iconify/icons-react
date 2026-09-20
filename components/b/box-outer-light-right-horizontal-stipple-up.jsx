import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wih5c8o4d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wih5c8o4d"/>`,
		"fallback": "memory:box-outer-light-right-horizontal-stipple-up",
	});
}

export default Component;
