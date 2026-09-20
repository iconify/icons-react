import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phxi50m6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phxi50m6k"/>`,
		"fallback": "mdi:cloud-discount-outline",
	});
}

export default Component;
