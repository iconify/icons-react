import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwizefb6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwizefb6u"/>`,
		"fallback": "game-icons:cooking-glove",
	});
}

export default Component;
