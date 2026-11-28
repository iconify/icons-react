import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2e_w-fes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2e_w-fes"/>`,
		"fallback": "noviair-light:contact-check",
	});
}

export default Component;
