import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muy_t5bzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muy_t5bzl"/>`,
		"fallback": "game-icons:battered-axe",
	});
}

export default Component;
