import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4y6-0tb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4y6-0tb"/>`,
		"fallback": "game-icons:djembe",
	});
}

export default Component;
