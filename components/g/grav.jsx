import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4_iznb1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4_iznb1n"/>`,
		"fallback": "la:grav",
	});
}

export default Component;
