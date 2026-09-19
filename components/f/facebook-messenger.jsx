import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf86pn3hu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf86pn3hu"/>`,
		"fallback": "fa6-brands:facebook-messenger",
	});
}

export default Component;
