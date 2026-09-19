import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h50f4zr4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h50f4zr4v"/>`,
		"fallback": "game-icons:diamond-ring",
	});
}

export default Component;
