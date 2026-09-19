import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ok3ubhr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ok3ubhr"/>`,
		"fallback": "fa6-solid:fill-drip",
	});
}

export default Component;
