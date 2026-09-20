import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0q9bbltx.css';
import '../../css/a/aa5s-gbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="w0q9bbltx"/><path class="aa5s-gbfn"/></g>`,
		"fallback": "keyline-icons:book-x-sharp-fill",
	});
}

export default Component;
