import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io2nejb1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io2nejb1h"/>`,
		"fallback": "game-icons:egg-clutch",
	});
}

export default Component;
