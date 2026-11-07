import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2sr0ib9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2sr0ib9l"/>`,
		"fallback": "selfhst:ech0-light",
	});
}

export default Component;
