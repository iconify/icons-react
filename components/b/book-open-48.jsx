import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we15u_h7x.css';
import '../../css/q/qg66_ubxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we15u_h7x"/><path class="qg66_ubxr"/>`,
		"fallback": "energy-icons:book-open-48",
	});
}

export default Component;
