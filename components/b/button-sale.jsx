import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hw618cd0p.css';
import '../../css/w/wby7ckorz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hw618cd0p"/><path class="wby7ckorz"/></g>`,
		"fallback": "si-glyph:button-sale",
	});
}

export default Component;
