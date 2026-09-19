import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3psukb1c.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3psukb1c"/>`,
		"fallback": "fa6-brands:html5",
	});
}

export default Component;
