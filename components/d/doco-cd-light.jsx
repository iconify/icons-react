import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unrev1bdf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unrev1bdf"/>`,
		"fallback": "selfhst:doco-cd-light",
	});
}

export default Component;
