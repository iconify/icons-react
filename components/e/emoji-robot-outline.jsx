import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t95rl8bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t95rl8bmb"/>`,
		"fallback": "mdi:emoji-robot-outline",
	});
}

export default Component;
