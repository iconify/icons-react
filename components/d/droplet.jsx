import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csbhz8b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csbhz8b7o"/>`,
		"fallback": "noviair-light:droplet",
	});
}

export default Component;
