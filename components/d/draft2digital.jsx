import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf0bu9bgy.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf0bu9bgy"/>`,
		"fallback": "fa-brands:draft2digital",
	});
}

export default Component;
