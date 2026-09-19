import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifsx8zb2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifsx8zb2e"/>`,
		"fallback": "game-icons:bird-claw",
	});
}

export default Component;
