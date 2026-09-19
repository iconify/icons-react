import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gine0sb3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gine0sb3z"/>`,
		"fallback": "game-icons:heavy-helm",
	});
}

export default Component;
