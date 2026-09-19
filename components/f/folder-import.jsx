import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8x6tibjp.css';
import '../../css/n/n800ycc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8x6tibjp"/><path class="n800ycc2s"/></g>`,
		"fallback": "hugeicons:folder-import",
	});
}

export default Component;
