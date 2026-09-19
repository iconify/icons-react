import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb44q248l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb44q248l"/>`,
		"fallback": "fa-brands:battle-net",
	});
}

export default Component;
