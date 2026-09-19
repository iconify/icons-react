import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhqvjfb8b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhqvjfb8b"/>`,
		"fallback": "fa6-brands:cpanel",
	});
}

export default Component;
