import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evue-8bzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evue-8bzf"/>`,
		"fallback": "game-icons:french-horn",
	});
}

export default Component;
