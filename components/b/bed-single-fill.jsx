import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv52_k8xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv52_k8xl"/>`,
		"fallback": "keyline-icons:bed-single-fill",
	});
}

export default Component;
