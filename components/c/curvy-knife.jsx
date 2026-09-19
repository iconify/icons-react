import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbe650b-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbe650b-l"/>`,
		"fallback": "game-icons:curvy-knife",
	});
}

export default Component;
