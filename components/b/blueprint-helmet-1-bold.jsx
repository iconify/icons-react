import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydla-ob9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydla-ob9l"/>`,
		"fallback": "streamline-ultimate:blueprint-helmet-1-bold",
	});
}

export default Component;
