import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bl_1urbwu.css';
import '../../css/h/h5-7nhb8d.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bl_1urbwu"/><path class="h5-7nhb8d"/></g>`,
		"fallback": "si-glyph:cross-hair",
	});
}

export default Component;
