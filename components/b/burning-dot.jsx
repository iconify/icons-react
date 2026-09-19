import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ki65buh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9ki65buh"/>`,
		"fallback": "game-icons:burning-dot",
	});
}

export default Component;
