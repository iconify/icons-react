import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/axcbjwqzp.css';
import '../../css/b/bwio8qbtt.css';
import '../../css/z/zlavaxbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="axcbjwqzp"/><path class="bwio8qbtt"/><path class="zlavaxbgk"/></g>`,
		"fallback": "hugeicons:image-rotation-clockwise",
	});
}

export default Component;
