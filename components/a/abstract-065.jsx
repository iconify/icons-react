import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkyvt1b2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkyvt1b2d"/>`,
		"fallback": "game-icons:abstract-065",
	});
}

export default Component;
