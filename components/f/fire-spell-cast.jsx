import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk90b0i-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk90b0i-l"/>`,
		"fallback": "game-icons:fire-spell-cast",
	});
}

export default Component;
