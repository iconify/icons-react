import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clgw4qbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clgw4qbjc"/>`,
		"fallback": "mdi:emoji-robot-dead-outline",
	});
}

export default Component;
