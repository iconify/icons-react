import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv2c4yb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv2c4yb7l"/>`,
		"fallback": "game-icons:evil-wings",
	});
}

export default Component;
