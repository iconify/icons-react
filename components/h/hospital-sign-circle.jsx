import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-8mhb3r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-8mhb3r"/>`,
		"fallback": "streamline:hospital-sign-circle",
	});
}

export default Component;
