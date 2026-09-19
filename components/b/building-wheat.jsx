import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4p3i9bxt.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4p3i9bxt"/>`,
		"fallback": "fa6-solid:building-wheat",
	});
}

export default Component;
