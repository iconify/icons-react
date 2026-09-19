import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr7ginidu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr7ginidu"/>`,
		"fallback": "game-icons:death-star",
	});
}

export default Component;
