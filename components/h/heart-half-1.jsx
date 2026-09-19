import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ck1931bjh.css';
import '../../css/q/qfd3apbyf.css';
import '../../css/d/det13e0ij.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ck1931bjh"/><path class="qfd3apbyf"/><path class="det13e0ij"/></g>`,
		"fallback": "glyphs-poly:heart-half-1",
	});
}

export default Component;
