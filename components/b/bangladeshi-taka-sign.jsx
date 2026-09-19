import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyv1v8bho.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyv1v8bho"/>`,
		"fallback": "fa6-solid:bangladeshi-taka-sign",
	});
}

export default Component;
