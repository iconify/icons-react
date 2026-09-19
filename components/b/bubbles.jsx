import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayd73xbfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayd73xbfk"/>`,
		"fallback": "game-icons:bubbles",
	});
}

export default Component;
