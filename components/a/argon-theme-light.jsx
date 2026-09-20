import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce6gxvdaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce6gxvdaa"/>`,
		"fallback": "selfhst:argon-theme-light",
	});
}

export default Component;
