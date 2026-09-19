import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgibdk_pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgibdk_pe"/>`,
		"fallback": "bx:bx-bulb",
	});
}

export default Component;
