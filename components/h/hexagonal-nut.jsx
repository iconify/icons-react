import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_adzibkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_adzibkl"/>`,
		"fallback": "game-icons:hexagonal-nut",
	});
}

export default Component;
