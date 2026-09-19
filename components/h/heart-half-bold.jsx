import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9sky_bti.css';
import '../../css/x/xrq0e1bkj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v9sky_bti"/><path class="xrq0e1bkj"/></g>`,
		"fallback": "glyphs:heart-half-bold",
	});
}

export default Component;
