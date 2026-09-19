import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbrj4gkkb.css';
import '../../css/y/ytbt4-b0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbrj4gkkb"/><path class="ytbt4-b0o"/>`,
		"fallback": "cil:clone",
	});
}

export default Component;
