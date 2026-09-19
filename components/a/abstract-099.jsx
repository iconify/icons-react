import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn98595hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn98595hc"/>`,
		"fallback": "game-icons:abstract-099",
	});
}

export default Component;
