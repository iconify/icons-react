import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en_y3r5if.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en_y3r5if"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-right-up-left",
	});
}

export default Component;
