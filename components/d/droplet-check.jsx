import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4f8m2rpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4f8m2rpt"/>`,
		"fallback": "noviair-light:droplet-check",
	});
}

export default Component;
