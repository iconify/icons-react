import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy4rl4bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vy4rl4bft"/>`,
		"fallback": "solar:inbox-outline",
	});
}

export default Component;
