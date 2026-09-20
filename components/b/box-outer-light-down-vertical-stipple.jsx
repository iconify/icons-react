import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v96ik30ki.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v96ik30ki"/>`,
		"fallback": "memory:box-outer-light-down-vertical-stipple",
	});
}

export default Component;
