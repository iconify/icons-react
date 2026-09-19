import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kehg7ij8i.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kehg7ij8i"/>`,
		"fallback": "fa-solid:hand-point-up",
	});
}

export default Component;
