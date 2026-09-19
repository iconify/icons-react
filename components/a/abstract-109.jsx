import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3d09_w4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3d09_w4r"/>`,
		"fallback": "game-icons:abstract-109",
	});
}

export default Component;
