import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb76uabce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb76uabce"/>`,
		"fallback": "fa-brands:hubspot",
	});
}

export default Component;
