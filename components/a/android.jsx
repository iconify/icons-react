import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nth2z_w3o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nth2z_w3o"/>`,
		"fallback": "selfhst:android",
	});
}

export default Component;
