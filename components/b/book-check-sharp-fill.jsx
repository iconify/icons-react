import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0q9bbltx.css';
import '../../css/z/zhydt8bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w0q9bbltx"/><path class="zhydt8bsg"/></g>`,
		"fallback": "keyline-icons:book-check-sharp-fill",
	});
}

export default Component;
