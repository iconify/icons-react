import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu4nmxc7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu4nmxc7p"/>`,
		"fallback": "game-icons:half-dead",
	});
}

export default Component;
