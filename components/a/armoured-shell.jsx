import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9_o2-3ec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9_o2-3ec"/>`,
		"fallback": "game-icons:armoured-shell",
	});
}

export default Component;
