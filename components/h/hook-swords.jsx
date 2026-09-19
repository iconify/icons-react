import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cyrvb2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2cyrvb2z"/>`,
		"fallback": "game-icons:hook-swords",
	});
}

export default Component;
