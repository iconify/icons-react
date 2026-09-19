import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy954vbun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy954vbun"/>`,
		"fallback": "game-icons:card-2-spades",
	});
}

export default Component;
