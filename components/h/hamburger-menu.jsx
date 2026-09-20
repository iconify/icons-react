import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0elk-azn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0elk-azn"/>`,
		"fallback": "openmoji:hamburger-menu",
	});
}

export default Component;
