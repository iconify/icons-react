import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu1x4xb0i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu1x4xb0i"/>`,
		"fallback": "fa6-brands:buromobelexperte",
	});
}

export default Component;
