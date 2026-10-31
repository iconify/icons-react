import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyp6oz34c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyp6oz34c"/>`,
		"fallback": "coolicons:camera-sparkle-fill-round",
	});
}

export default Component;
