import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_qo1duhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_qo1duhe"/>`,
		"fallback": "game-icons:card-3-spades",
	});
}

export default Component;
