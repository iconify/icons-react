import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt95f90gc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt95f90gc"/>`,
		"fallback": "game-icons:info",
	});
}

export default Component;
