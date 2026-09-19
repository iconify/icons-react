import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbvb_ybvn.css';
import '../../css/i/iixqs_bxl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cbvb_ybvn"/><path class="iixqs_bxl"/></g>`,
		"fallback": "glyphs:head-side-duo",
	});
}

export default Component;
