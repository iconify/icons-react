import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp5o4dbvb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp5o4dbvb"/>`,
		"fallback": "memory:box-outer-light-up-stipple",
	});
}

export default Component;
