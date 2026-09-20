import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5dw-kbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5dw-kbcu"/>`,
		"fallback": "streamline-freehand:cellular-network-lte",
	});
}

export default Component;
