import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st6t05p-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st6t05p-u"/>`,
		"fallback": "game-icons:card-6-diamonds",
	});
}

export default Component;
