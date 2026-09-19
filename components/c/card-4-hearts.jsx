import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kid9qfb2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kid9qfb2m"/>`,
		"fallback": "game-icons:card-4-hearts",
	});
}

export default Component;
