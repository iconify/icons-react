import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp93dz86h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp93dz86h"/>`,
		"fallback": "nrk:drag-horizontal-expressive",
	});
}

export default Component;
