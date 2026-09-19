import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8zkq8rtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8zkq8rtp"/>`,
		"fallback": "game-icons:cheese-wedge",
	});
}

export default Component;
