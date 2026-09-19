import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyr4txpno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyr4txpno"/>`,
		"fallback": "game-icons:human-cannonball",
	});
}

export default Component;
