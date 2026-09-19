import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8lqozphz.css';

const viewBox = {"width":408,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8lqozphz"/>`,
		"fallback": "ps:file",
	});
}

export default Component;
