import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c42891b6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c42891b6n"/>`,
		"fallback": "game-icons:footsteps",
	});
}

export default Component;
