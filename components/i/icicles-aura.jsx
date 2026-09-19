import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ilai0fi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2ilai0fi"/>`,
		"fallback": "game-icons:icicles-aura",
	});
}

export default Component;
