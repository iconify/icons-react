import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztk1owbkv.css';
import '../../css/s/sz80-ybsk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ztk1owbkv"/><path class="sz80-ybsk"/></g>`,
		"fallback": "glyphs-poly:child",
	});
}

export default Component;
