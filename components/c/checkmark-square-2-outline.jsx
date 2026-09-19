import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7s6tsbkb.css';
import '../../css/i/ik4wy9jol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7s6tsbkb"/><path class="ik4wy9jol"/>`,
		"fallback": "eva:checkmark-square-2-outline",
	});
}

export default Component;
