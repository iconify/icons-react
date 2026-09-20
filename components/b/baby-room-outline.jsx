import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z12loqhsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z12loqhsi"/>`,
		"fallback": "mdi:baby-room-outline",
	});
}

export default Component;
