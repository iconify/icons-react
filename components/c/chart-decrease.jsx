import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v4dco01cl.css';
import '../../css/y/yhr0z_-za.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v4dco01cl"/><path class="yhr0z_-za"/></g>`,
		"fallback": "si-glyph:chart-decrease",
	});
}

export default Component;
