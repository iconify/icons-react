import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbo5oob-u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbo5oob-u"/>`,
		"fallback": "fa-brands:cc-diners-club",
	});
}

export default Component;
