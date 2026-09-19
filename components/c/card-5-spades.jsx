import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtsz6d8hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtsz6d8hc"/>`,
		"fallback": "game-icons:card-5-spades",
	});
}

export default Component;
