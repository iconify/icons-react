import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqytkfb0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqytkfb0x"/>`,
		"fallback": "game-icons:imp",
	});
}

export default Component;
