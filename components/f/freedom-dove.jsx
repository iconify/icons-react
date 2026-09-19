import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx-1ftb9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx-1ftb9x"/>`,
		"fallback": "game-icons:freedom-dove",
	});
}

export default Component;
