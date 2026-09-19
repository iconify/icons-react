import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vdlu31boo.css';
import '../../css/i/i_i594b1y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vdlu31boo"/><path class="i_i594b1y"/></g>`,
		"fallback": "si-glyph:clipboard",
	});
}

export default Component;
